"use client"
import clsx from "clsx"
import { Link } from "lucide-react"
import { usePathname } from 'next/navigation'

export const Navbar = () => {

    const path = usePathname()

    return (
        <div>
            <div className="flex flex-row w-full text-3xl items-start border-b-4 border-black p-5">
                ENDLESS FORMS MOST BEAUTIFUL
            </div>
        </div>
    )
}
