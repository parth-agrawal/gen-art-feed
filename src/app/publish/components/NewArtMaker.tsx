"use client";

import { useState } from "react"
import { ArtInterpreter } from "../../ArtInterpreter"
import { ArtControls } from "../../ArtControls"
import { handlePublish } from "../actions";

export const NewArtMaker = () => {

    const [boxCount, setBoxCount] = useState<number>(1)

    return (
        <div>
            <ArtControls boxCount={boxCount} setBoxCount={setBoxCount} />
            <ArtInterpreter boxCount={boxCount} />
            <button onClick={() => handlePublish(boxCount)}>
                Publish
            </button>
        </div>
    )
}


export default NewArtMaker;
