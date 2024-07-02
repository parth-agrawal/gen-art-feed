"use client";

import { useEffect, useState } from "react";
import { getArts } from "./actions";
import { ArtInterpreter } from "@/app/ArtInterpreter";
import { Art } from "@prisma/client";
import Link from "next/link";
import Button from "@/components/Button";
import { revalidatePath } from "next/cache";

export const Feed = () => {

    const [timeCount, setTimeCount] = useState<number>(0);
    const [arts, setArts] = useState<Art[]>([]);

    useEffect(() => {
        const pull = async () => {
            setArts(await getArts());
        }
        const timeout = setTimeout(() => {
            setTimeCount(prev => prev + 1);
            pull();
            // Assuming revalidatePath is a function that you have defined elsewhere
        }, 2000);

        return () => clearTimeout(timeout);
    }, [timeCount]);

    return (
        <div>
            Feed:
            <Button onClick={() => console.log("hello world!")}> hello! </Button>
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