"use server";
import { redirect, useRouter } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { Feed } from "./Feed";
import { getArts } from "./data";

const FeedScreen = async () => {
    const feed = await getArts(); // this will be revalidated


    const clerkUser = await currentUser();


    if (!clerkUser) {
        return redirect("/");
    }




    return (
        <div>
            <Feed />
        </div>
    );
};

export default FeedScreen;