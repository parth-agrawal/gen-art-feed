"use client";

import { useEffect, useState } from "react";
import { getArts } from "./actions";
import { ArtInterpreter } from "@/app/publish/components/ArtInterpreter";
import { Art } from "@prisma/client";
import Link from "next/link";
import Button from "@/components/Button";
import { revalidatePath } from "next/cache";
import ImageCard from "@/components/ImageCard";
import { getUserByAuthorId } from "../publish/actions";
import { Author } from "next/dist/lib/metadata/types/metadata-types";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { SignIn, useSignIn } from "@clerk/clerk-react";

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
    const user = useAuth();
    const router = useRouter();

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





    const handlePubNav = async () => {

        console.log(user)
        if (user.isSignedIn) {

            router.push("/publish");

        }
        else {
            router.push("/api/sign-in");



        }


    }



    return (
        <>
            <div className={`flex flex-col px-4 w-full h-full bg-bg justify-${arts.length === 0 ? 'center' : 'start'} items-center`}>
                <div className={`flex flex-col w-screen items-center gap-5`}>
                    {arts.length == 0 ? (
                        <div className="flex ">
                            <Spinner />
                        </div>
                    ) : (
                        arts.slice().reverse().map((art) => {
                            return (
                                <ImageCard key={art.id} description={"Creator: " + art.Author.name || "Guest"}>
                                    <ArtInterpreter key={art.id} boxCount={art.boxCount} />
                                </ImageCard>
                            );
                        })
                    )}
                </div>

                <div className="fixed bottom-10 right-10">
                    <Button onClick={handlePubNav}> Create your own </Button>
                </div>
            </div >
        </>
    );
};

export const Spinner = () => {
    return (
        <div className="flex justify-center items-center spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span>LOADING...</span>
        </div>

    )
}