import { useEffect, useState } from "react";
import { getArts } from "../actions";
import { ArtInterpreter } from "@/app/ArtInterpreter";
import { Art } from "@prisma/client";

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
            {arts.map((art) => {
                return (
                    <ArtInterpreter key={art.id} boxCount={art.boxCount} />
                );

            })}


        </div>
    );
};  