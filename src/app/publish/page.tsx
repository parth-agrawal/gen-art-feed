"use server";

import { useState } from "react"
import { ArtInterpreter } from "./components/ArtInterpreter"
import { ArtControls } from "./components/ArtControls"
import prisma from "../../../prisma/client";
import { auth, currentUser } from "@clerk/nextjs/server";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { handlePublish } from "./actions";
import NewArtMaker from "./components/NewArtMaker";
import { Navbar } from "@/components/Navbar";

const PublishScreen = async () => {

    const clerkUser = await currentUser();


    if (!clerkUser) {
        return redirect("/");
    }




    return (
        <div className="flex flex-col h-screen">
            <NewArtMaker />
        </div>
    )
}


export default PublishScreen;
