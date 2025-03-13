'use client'
import Link from "next/link"
import Image from "next/image"

import { useUserContext } from "../../context/UserContext"

export default function Header() {

    const { userData } = useUserContext()

    return (
        <div className="flex flex-col">
            <h1 className="p-3 mb-2 mb-6 sm:mb-0 bg-slate-200">Header</h1>
            <ul className="flex flex-row justify-items-start justify-between divide-x divide-slate-500 border border-slate-800 rounded-b-md bg-gray-200">
                <Link href="/">
                <li className="px-2">Home</li>
                </Link>
                <Link href="/projects">
                <li className="px-2">Projects</li>
                </Link>
                <Link href="/">
                <li className="px-2">placeholder</li>
                </Link>
                <Link href="/">
                <li className="px-2">placeholder</li>
                </Link>
                <Link href="/">
                <li className="px-2">placeholder</li>
                </Link>
                
                <li className="px-2 min-w-28 hidden sm:block "></li>
                
            </ul>
            <div>
                <Link href="/Profile" className="absolute top-2 right-2">
                
                <Image
                className="w-[80px] h-[80px] shadow-lg relative overflow-hidden object-cover rounded-lg"
                src="/BK fan-art.webp" 
                alt={userData.personalData.image} 
                width={100} 
                height={100}
                />
                </Link>
            </div>
        </div>
    )
}