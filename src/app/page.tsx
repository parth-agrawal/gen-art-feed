"use client"

import Image from "next/image";
import { ArtInterpreter } from "./ArtInterpreter";
import { ClerkProvider } from "@clerk/nextjs";
import { SignInButton, SignOutButton, SignedIn, SignedOut } from "@clerk/clerk-react";

export default function Home() {
  return (
    <>

      <div className="h-screen flex justify-center items-center">

        gang gang!
        <SignedOut >
          You need to sign in
          <SignInButton>Sign in boiii</SignInButton>
        </SignedOut>

        <SignedIn>
          You're signed in!
          <SignOutButton>Sign out my homie</SignOutButton>
        </SignedIn>
      </div>


    </>
  );
}
