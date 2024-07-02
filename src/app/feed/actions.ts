"use server";

import { Art } from "@prisma/client";
import prisma from "../../../prisma/client";
import { Author } from "next/dist/lib/metadata/types/metadata-types";
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

export const getArts = async (): Promise<ArtWithAuthor> => {
    const arts = await prisma.art.findMany({
        include: {
            Author: true
        }
    });

    return arts

}

