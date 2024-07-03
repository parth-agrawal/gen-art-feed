import { clerkMiddleware, currentUser } from "@clerk/nextjs/server";
import prisma from "../prisma/client";

export default clerkMiddleware();

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};




