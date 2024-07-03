import { NextRequest, NextResponse } from "next/server";
import prisma from "../prisma/client";
import { currentUser } from "@clerk/nextjs/server";
import { getUserByClerkId } from "./app/publish/actions";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export const optionalCreateUser = (handler: NextApiHandler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const clerkUser = await currentUser()

        console.log("clerk user", clerkUser)

        if (!clerkUser) return handler(req, res)

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
        return res.send("hello")


        return handler(req, res)



    }


}