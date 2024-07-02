"use client";

import { useState } from "react"
import { ArtInterpreter } from "../ArtInterpreter"
import { ArtControls } from "../ArtControls"
import { getUserByClerkId, handlePublish } from "./actions";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { currentUser, getAuth } from "@clerk/nextjs/server";
import ImageCard from "@/components/ImageCard";
import { User } from "@prisma/client";
import Button from "@/components/Button";

export const NewArtMaker = () => {

    const [boxCount, setBoxCount] = useState<number>(1)
    const [user, setUser] = useState<User | null>(null)


    async function pullUser() {
        const clerkUser = await useAuth()
        if (!clerkUser || !clerkUser.userId) return
        const user = await getUserByClerkId(clerkUser.userId)

        setUser(user)
    }

    pullUser();

    let name = ""
    if (user) {
        if (user.name) name = user.name;
        else name = "";
    }

    return (
        <div className="flex flex-col h-screen items-center justify-center bg-bg">
            <ImageCard description={"Creator: " + name}>

                <ArtControls boxCount={boxCount} setBoxCount={setBoxCount} />
                <ArtInterpreter boxCount={boxCount} />
            </ImageCard>

            <div>
                Controls go here
            </div>

            <div className="flex flex-row w-full justify-between">

                <Link href="/feed">

                    <Button onClick={() => { }}> Back to feed </Button>
                </Link>



                <Button onClick={() => handlePublish(boxCount)}> Publish </Button>

            </div>
        </div>
    )
}


export default NewArtMaker;
