"use client";

import { useState } from "react"
import { ArtInterpreter } from "../ArtInterpreter"
import { ArtControls } from "../ArtControls"

export const PublishScreen = () => {

    const [boxCount, setBoxCount] = useState<number>(1)

    return (
        <div>

            <ArtControls boxCount={boxCount} setBoxCount={setBoxCount} />

            <ArtInterpreter boxCount={boxCount} />
            <button>
                Publish
            </button>
        </div>
    )
}


export default PublishScreen;
