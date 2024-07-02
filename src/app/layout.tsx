import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "@/components/Navbar";
import { UserProvider } from "@/providers/UserProvider";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Generative Art Feed",
  description: "Generated by you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

      <UserProvider>


        <html lang="en">
          <body className={inter.className}>
            <Navbar />
            <div className="h-screen w-screen bg-bg px-4">

              {children}
            </div>
          </body>
        </html>
      </UserProvider>
    </ClerkProvider >
  );
}


// userprovider is a clientside component

// loaded in root layout
// get the user and add it to the userprovider context
// userprovider accepts it as a prop and children
// render children

// look up provider pattern

// 


/**
 * 
 */


