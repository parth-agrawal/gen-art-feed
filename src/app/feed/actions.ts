"use server";

import { Art } from "@prisma/client";
import prisma from "../../../prisma/client";
import { Author } from "next/dist/lib/metadata/types/metadata-types";
import { optionalUserGuard } from "../publish/actions";
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
    await optionalUserGuard()

    const arts = await prisma.art.findMany({
        include: {
            Author: true
        }
    });

    return arts

}

