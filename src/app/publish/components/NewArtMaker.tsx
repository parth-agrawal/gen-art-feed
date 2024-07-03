"use client";

import { useState } from "react"
import { ArtInterpreter } from "./ArtInterpreter"
import { ArtControls } from "./ArtControls"
import { getUserByClerkId, handlePublish } from "../actions";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { currentUser, getAuth } from "@clerk/nextjs/server";
import ImageCard from "@/components/ImageCard";
import { User } from "@prisma/client";
import Button from "@/components/Button";
import { useFoundUser } from "@/providers/UserProvider";
import { useRouter } from "next/navigation";

export const NewArtMaker = () => {

    const [boxCount, setBoxCount] = useState<number>(5)
    const router = useRouter()

    const user = useFoundUser()

    const localHandlePublish = async () => {
        await handlePublish(boxCount)
        router.push("/feed")
    }

    return (
        <div className="flex flex-col mt-10 items-center justify-center gap-20">
            <ImageCard description={user ? "Creator: " + user.name : "Creator: Guest"}>

                <ArtInterpreter boxCount={boxCount} />
            </ImageCard>

            <ArtControls boxCount={boxCount} setBoxCount={setBoxCount} />

            <div className="flex flex-row justify-around w-full ">

                <Link href="/feed">

                    <Button onClick={() => { }}> Back to feed </Button>
                </Link>


                <Button onClick={localHandlePublish}> Publish </Button>

            </div>
        </div>
    )
}


export default NewArtMaker;
