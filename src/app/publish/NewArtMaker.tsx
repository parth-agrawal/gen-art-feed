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
        <div>
            <ImageCard description={name}>

                <ArtControls boxCount={boxCount} setBoxCount={setBoxCount} />
                <ArtInterpreter boxCount={boxCount} />
            </ImageCard>
            <button className="border border-black rounded-md p-2" onClick={() => handlePublish(boxCount)}>
                Publish
            </button>
            <div className="border border-black rounded p-2">
                <Link href="/feed">
                    View art feed
                </Link>
            </div>
        </div>
    )
}


export default NewArtMaker;
