"use client";

import { useEffect, useState } from "react";
import { getArts } from "./actions";
import { ArtInterpreter } from "@/app/ArtInterpreter";
import { Art } from "@prisma/client";
import Link from "next/link";
import Button from "@/components/Button";
import { revalidatePath } from "next/cache";
import ImageCard from "@/components/ImageCard";
import { getUserByAuthorId } from "../publish/actions";
import { Author } from "next/dist/lib/metadata/types/metadata-types";
import { useRouter } from "next/router";

type ArtWithAuthor = ({
    Author: {
        id: string;
        email: string;
        name: string | null;
        createdAt: Date;
        updatedAt: Date;
        ClerkId: string;
    };
} & {
    id: string;
    boxCount: number;
    createdAt: Date;
    updatedAt: Date;
    isPublished: boolean;
    isDeleted: boolean;
    authorId: string;
})[]

export const Feed = () => {

    const [timeCount, setTimeCount] = useState<number>(0);
    const [arts, setArts] = useState<ArtWithAuthor>([]);

    useEffect(() => {
        const pull = async () => {
            const artsWithAuthor = await getArts();
            setArts(artsWithAuthor);

        }
        const timeout = setTimeout(() => {
            setTimeCount(prev => prev + 1);
            pull();
            // Assuming revalidatePath is a function that you have defined elsewhere
        }, 2000);

        return () => clearTimeout(timeout);
    }, [timeCount]);

    return (
        <>
            <div className="flex flex-col w-full h-full items-center justify-center">
                {/* <Button onClick={() => console.log("hello world!")}> hello! </Button> */}

                <div className="flex w-screen flex-col items-center justify-center gap-5">
                    {arts.length === 0 ? (
                        <div className="flex justify-center items-center spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                            <span>LOADING...</span>
                        </div>
                    ) : (
                        arts.map((art) => {
                            return (
                                <ImageCard description={"Creator:" + art.Author.name || ""}>
                                    <ArtInterpreter key={art.id} boxCount={art.boxCount} />
                                </ImageCard>
                            );
                        })
                    )}
                </div>

                {/* button absolutely positioned at the bottom right */}
                <div className="fixed bottom-10 right-10">
                    <Link href="/publish">

                        <Button onClick={() => { }}> Create your own </Button>
                    </Link>

                </div>


            </div >
        </>
    );
};  