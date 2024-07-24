import { currentUser } from "@clerk/nextjs/server";
import prisma from "../../../../prisma/client";
import { redirect } from "next/navigation";

// export const GET = optionalUser(async (req: NextRequest) => {
//     console.log(req.user)
//     return (
//         redirect("/")
//     );
// })
export const GET = async () => {
  const curr = await currentUser();
  const clerkId = curr?.id;

  if (!clerkId) {
    return redirect("/");
  } else {
    const newUser = await prisma.user.create({
      data: {
        ClerkId: clerkId,
        email: curr?.emailAddresses[0].emailAddress || "",
        name: curr?.username,
      },
    });

    console.log(newUser);
  }
  return redirect("/publish");
};
