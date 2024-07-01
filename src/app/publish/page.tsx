"use client";

import { useState } from "react"
import { ArtInterpreter } from "../ArtInterpreter"
import { ArtControls } from "../ArtControls"
import prisma from "../../../prisma/client";

export const PublishScreen = () => {

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
