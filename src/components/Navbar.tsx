"use client"
import { SignInButton, SignedIn, SignedOut, UserButton, UserProfile, useAuth, useClerk } from "@clerk/nextjs"
import clsx from "clsx"
import { Link } from "lucide-react"
import { usePathname } from 'next/navigation'
import Button from "./Button"
import Avatar from "./Avatar"

export const Navbar = () => {

    const path = usePathname()
    const clerk = useClerk()

    const avatarImage = clerk.user?.imageUrl







    return (
        <div className="flex flex-row w-full justify-between gap-5 border-b-4 border-black p-5" >
            <div className="tracking-[2px] flex flex-row w-full text-3xl items-start ">
                ENDLESS FORMS MOST BEAUTIFUL
            </div>
            <div>
                <SignedOut>


                    <SignInButton forceRedirectUrl={"/"} signUpForceRedirectUrl={"/api/sign-up-callback"}>
                        <div className="flex w-[100px]">
                            <Button onClick={() => { }}>Sign in</Button>
                        </div>
                    </SignInButton>
                </SignedOut>
                <SignedIn>

                    {/* <Avatar imageUrl={avatarImage || ""} /> */}
                    <UserButton />





                </SignedIn>

            </div>


        </div>
    )
}
