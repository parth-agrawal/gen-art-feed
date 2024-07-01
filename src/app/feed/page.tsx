"use client";

import { useAuth } from "@clerk/nextjs";
import prisma from "../../../prisma/client";
import { ArtInterpreter } from "../ArtInterpreter";
import { redirect, useRouter } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export const FeedScreen = () => {

    const router = useRouter();

    const user = useAuth();

    if (!user.isLoaded) {
        return <div>Loading...</div>
    }
    if (!user.isSignedIn) {
        return router.push("/")
    }



    return (
        <div>
            Feed:
            {prisma.art.findMany().then((arts) => {
                return arts.map((art) => {
                    return (
                        <ArtInterpreter key={art.id} boxCount={art.boxCount} />
                    );
                });
            })}

        </div>
    );
};

export default FeedScreen;