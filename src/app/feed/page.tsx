import { useAuth } from "@clerk/nextjs";
import prisma from "../../../prisma/client";
import { ArtInterpreter } from "../ArtInterpreter";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export const FeedScreen = () => {

    auth().protect({ unauthenticatedUrl: "/" });


    // const { isLoaded, isSignedIn } = useAuth();

    // if (!isLoaded) {
    //     return <div>Loading...</div>
    // }
    // if (!isSignedIn) {
    //     return (
    //         redirect("/")
    //     );
    // }



    return (
        <div>
            Feed:
            {prisma.art.findMany().then((arts) => {
                return arts.map((art) => {
                    return (
                        <ArtInterpreter key={art.id} boxCount={art.boxCount} />
                    );
                });
            })}

        </div>
    );
};

export default FeedScreen;