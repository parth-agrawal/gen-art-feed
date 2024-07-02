"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "../../../prisma/client";
import { User } from "@prisma/client";


export async function handlePublish(boxCount: number) {
    console.log("handle publish")
    const clerkAuth = await auth();
    console.log("auth", clerkAuth)

    if (!clerkAuth.userId) return console.error("No user id")

    const currentUser = await prisma.user.findUnique({
        where: {
            ClerkId: clerkAuth.userId
        }
    })

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

}

// fetch a user by their author id
export async function getUserByAuthorId(authorId: string): Promise<User | null> {
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
    const user = await prisma.user.findUnique({
        where: {
            ClerkId: clerkId
        }
    })
    if (!user) return null;
    return user
}



