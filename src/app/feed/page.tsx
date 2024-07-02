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
import { Feed } from "./components/Feed";

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
            <Feed />


        </div>
    );
};

export default FeedScreen;