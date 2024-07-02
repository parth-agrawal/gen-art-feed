"use client";

import { useState } from "react"
import { ArtInterpreter } from "../../ArtInterpreter"
import { ArtControls } from "../../ArtControls"
import { handlePublish } from "../actions";
import Link from "next/link";

export const NewArtMaker = () => {

    const [boxCount, setBoxCount] = useState<number>(1)

    return (
        <div>
            <ArtControls boxCount={boxCount} setBoxCount={setBoxCount} />
            <ArtInterpreter boxCount={boxCount} />
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
