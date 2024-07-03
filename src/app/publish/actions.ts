"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "../../../prisma/client";
import { User } from "@prisma/client";
import { redirect } from "next/navigation";


export const optionalUserGuard = async () => {
    const clerkUser = await currentUser()

    console.log("clerk user", clerkUser)

    if (!clerkUser) return;

    const userId = clerkUser.id
    const user = clerkUser ? await getUserByClerkId(clerkUser.id) : null
    console.log("user", user)

    if (!user) {
        const newUser = await prisma.user.create({
            data: {
                email: clerkUser.emailAddresses[0].emailAddress,
                name: clerkUser.username,
                ClerkId: clerkUser.id
            }
        })
    }
}

export async function handlePublish(boxCount: number) {
    await optionalUserGuard()

    console.log("handle publish")
    const clerkAuth = await auth();
    console.log("auth", clerkAuth)

    if (!clerkAuth.userId) return console.error("No user id")

    const currentUser = await prisma.user.findUnique({
        where: {
            ClerkId: clerkAuth.userId
        }
    })

    console.log(""
    )

    // TODO: create a user if they don't exist
    if (currentUser) {
        const authorId = currentUser.id

        const art = await prisma.art.create({
            data: {
                boxCount: boxCount,
                authorId: authorId
            }
        })

        console.log("Art created", art)
        return art
    }

    redirect("/feed")

}

// fetch a user by their author id
export async function getUserByAuthorId(authorId: string): Promise<User | null> {
    await optionalUserGuard()

    const user = await prisma.user.findUnique({
        where: {
            id: authorId
        }
    })
    if (!user) return null;
    return user
}

// fetch a user by their clerk id
export async function getUserByClerkId(clerkId: string): Promise<User | null> {
    await optionalUserGuard()

    const user = await prisma.user.findUnique({
        where: {
            ClerkId: clerkId
        }
    })
    if (!user) return null;
    return user
}



