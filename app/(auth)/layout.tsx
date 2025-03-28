import Image from "next/image";
import { ReactNode } from "react";
import BackGrndImg from "../../public/login_background.jpg"
import Logo from "../../public/netflix_logo.svg"

export default function AuthLayout({children} : {children: ReactNode}) {
    return (
        <div className="text-white relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">

        <Image src={BackGrndImg}
        alt="background image" 
        className="hidden sm:flex sm:object-cover -z-10 brightness-55"
        priority
        fill
        />        

        <Image src={Logo}
        alt="Logo"
        className="absolute left-4 top-4 object-contain md:left-10 md:top"
        width={120}
        height={120}
        priority
        />
        {children}
        </div>
    )
}