import { Rubik_Mono_One, Geologica } from "next/font/google"

const rubikMono = Rubik_Mono_One({
    variable: '--font-rubik',
    subsets: ['latin'],
    weight: ["400"]
})

const outfit = Geologica({
    weight: ['300'],
    variable: '--font-outfit',
    subsets: ['latin'],
})

export default function Navbar(){
    return (
        <header className="w-screen fixed top-0 left-0 h-18 bg-white">
            <div className="flex flex-row items-center mt-3">
                <img className="ml-6 w-12" src="/binoculars.png" />
                <p className={`text-[#38c674] w-fit ml-4 text-xl font-bold font-sans ${rubikMono.variable}`}>Wanderer</p>
                <button className={`bg-[#38c674] ml-auto rounded-full w-24 font-mono py-[0.3rem] ${outfit.variable} text-sm text-white mr-4`}>Signup</button>
                <button className={`mr-6 w-24 font-mono ${outfit.variable} rounded-full border-[#38c674] border-[1.5px] text-sm py-1 text-[#38c674] transition-all duration-200 hover:bg-[#38c674] hover:border-none hover:text-white`}>Login</button>
            </div>
        </header>
    )
}