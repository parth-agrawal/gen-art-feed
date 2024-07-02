"use client";

import { useAuth } from "@clerk/nextjs";
import prisma from "../../../prisma/client";
import { ArtInterpreter } from "../ArtInterpreter";
import { redirect, useRouter } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { get } from "http";
import { getArts } from "./actions";
import { useEffect, useState } from "react";
import { Art } from "@prisma/client";

export const FeedScreen = () => {

    const [timeCount, setTimeCount] = useState<number>(0);
    const [arts, setArts] = useState<Art[]>([]);

    const router = useRouter();

    const user = useAuth();

    if (!user.isLoaded) {
        return <div>Loading...</div>
    }
    if (!user.isSignedIn) {
        return router.push("/")
    }

    useEffect(() => {

        getArts().then((arts) => {
            setArts(arts);
        })
        setTimeout(() => {
            setTimeCount(timeCount + 1);
        }, 1000);

    }, [timeCount]);



    return (
        <div>
            Feed:
            {arts.map((art) => {
                return (
                    <ArtInterpreter key={art.id} boxCount={art.boxCount} />
                );

            })}


        </div>
    );
};

export default FeedScreen;