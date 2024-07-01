"use client";

import { useState } from "react"
import { ArtInterpreter } from "../ArtInterpreter"
import { ArtControls } from "../ArtControls"
import prisma from "../../../prisma/client";
import { auth } from "@clerk/nextjs/server";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

export const PublishScreen = () => {

    const router = useRouter();

    const user = useAuth();

    if (!user.isLoaded) {
        return <div>Loading...</div>
    }
    if (!user.isSignedIn) {
        return router.push("/")
    }


    const [boxCount, setBoxCount] = useState<number>(1)

    function handlePublish() {

    }

    return (
        <div>

            <ArtControls boxCount={boxCount} setBoxCount={setBoxCount} />

            <ArtInterpreter boxCount={boxCount} />
            <button onClick={handlePublish}>
                Publish
            </button>
        </div>
    )
}


export default PublishScreen;
