"use server";
import { redirect, useRouter } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { Feed } from "./Feed";
import { getArts } from "./data";
import { Navbar } from "@/components/Navbar";

const FeedScreen = async () => {
    const feed = await getArts(); // this will be revalidated


    const clerkUser = await currentUser();


    // if (!clerkUser) {
    //     return redirect("/");
    // }




    return (
        <>
            <div className="flex flex-col h-screen items-center ">
                <Feed />
            </div>
        </>
    );
};

export default FeedScreen;