import prisma from "../../../prisma/client";
import { ArtInterpreter } from "../ArtInterpreter";

export const FeedScreen = () => {



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