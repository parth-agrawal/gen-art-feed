"use client"

import Image from "next/image";
import { ArtInterpreter } from "./ArtInterpreter";
import { ClerkProvider } from "@clerk/nextjs";
import { SignInButton, SignOutButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useState } from "react";

export default function Home() {



  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">

        gang gang!


        <SignedOut >
          <div>

            You need to sign in
          </div>
          <SignInButton forceRedirectUrl={"/api/sign-up-callback"}>
            Sign in boiii
          </SignInButton>
        </SignedOut>

        <SignedIn>
          You're signed in!
          <SignOutButton>Sign out my homie</SignOutButton>
        </SignedIn>
      </div>


    </>
  );
}
