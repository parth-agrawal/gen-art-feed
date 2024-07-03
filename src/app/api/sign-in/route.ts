import { auth, redirectToSignIn } from "@clerk/nextjs/server"

export const GET = () => {
    return auth().redirectToSignIn({ returnBackUrl: "/publish" })
}
