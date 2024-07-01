"use server";

import { Art } from "@prisma/client";
import prisma from "../../../prisma/client";


export const getArts = async (): Promise<Art[]> => {
    const arts = await prisma.art.findMany();
    return arts;
}