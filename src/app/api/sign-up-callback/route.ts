
import { currentUser } from "@clerk/nextjs/server";
import prisma from "../../../../prisma/client";
import { redirect } from "next/navigation";
import { getUserByClerkId } from "@/app/publish/actions";



// export const GET = optionalUser(async (req: NextRequest) => {
//     console.log(req.user)
//     return (
//         redirect("/")
//     );
// })
export const GET = async () => {
    const curr = await currentUser();
    const clerkId = curr?.id

    if (!clerkId) {
        return redirect("/")
    }
    else {

        const user = getUserByClerkId(clerkId)
        if (!user) {
            try {
                const newUser = await prisma.user.create({
                    data: {
                        ClerkId: clerkId,
                        email: curr?.emailAddresses[0].emailAddress || "",
                        name: curr?.username
                    }
                })

                console.log(newUser)
            } catch (e) {
                console.log(e)
            }

        }


    }
    return redirect("/")
}
