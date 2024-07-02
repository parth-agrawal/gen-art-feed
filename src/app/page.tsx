"use client"

import Image from "next/image";
import { ArtInterpreter } from "./publish/components/ArtInterpreter";
import { ClerkProvider } from "@clerk/nextjs";
import { SignInButton, SignOutButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useState } from "react";
import Link from "next/link";
import { Feed } from "./feed/Feed";

export default function Home() {



  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center">

        gang gang!


        <SignedOut >
          <div>

            You need to sign in
          </div>
          <SignInButton forceRedirectUrl={"/"} signUpForceRedirectUrl={"/api/sign-up-callback"}>
            Sign in boiii
          </SignInButton>
        </SignedOut>


        <SignedIn>

          <div className="flex flex-col gap-4 items-center justify-center">
            You&apos;re signed in!
            <div className="border border-black rounded-md p-2">
              <SignOutButton>Sign out</SignOutButton>
            </div>
            <div className="border border-black rounded-md p-2">
              <Link href="/feed">
                View art feed
              </Link>
            </div>
            <div className="border border-black rounded-md p-2">

              <Link href="/publish">
                Publish a new piece of art
              </Link>
            </div>
          </div>
        </SignedIn>
      </div >


    </>
  );
}
