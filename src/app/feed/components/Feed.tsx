import { useEffect, useState } from "react";
import { getArts } from "../actions";
import { ArtInterpreter } from "@/app/ArtInterpreter";
import { Art } from "@prisma/client";
import Link from "next/link";

export const Feed = () => {

    const [timeCount, setTimeCount] = useState<number>(0);
    const [arts, setArts] = useState<Art[]>([]);

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
            <div className="border border-black rounded w-40 p-2">

                <Link href="/publish">
                    Publish a new piece of art
                </Link>
            </div>
            {arts.map((art) => {
                return (
                    <ArtInterpreter key={art.id} boxCount={art.boxCount} />
                );

            })}


        </div>
    );
};  