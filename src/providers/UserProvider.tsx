"use client";

import { useAuth } from "@clerk/nextjs";
import { User } from "@prisma/client";
import { createContext, useContext, useEffect, useState } from "react";
import prisma from "../../prisma/client";
import { getUserByClerkId } from "@/app/publish/actions";

const UserContext = createContext<User | null>(null);


export const UserProvider = ({ children }: { children: React.ReactNode }) => {

    const { userId } = useAuth()
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        // if (userId) {
        //     prisma.user.findUnique({
        //         where: {
        //             ClerkId: userId
        //         }
        //     }).then(setUser)
        // }
        if (userId) getUserByClerkId(userId).then(setUser)

    }, [userId])


    return (
        <>
            <UserContext.Provider value={user}>

                {children}
            </UserContext.Provider>
        </>
    )

}

export const useFoundUser = () => useContext(UserContext)