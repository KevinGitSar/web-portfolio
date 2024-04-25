"use client";
import { useState } from "react";

export default function NavigationBar(){
    
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    }
    return(
        <div>
            {/* On Small Screens  */}
            <div className="w-full bg-white">
                <div className="fixed border border-[#3FAA95] w-[60px] sm:w-[65px] md:w-[80px] lg:w-[85px] xl:w-[90px] 2xl:w-[100px] m-3 cursor-pointer z-50 transition ease-in-out delay-100 hover:scale-105" onClick={()=>{toggleMenu()}}>
                    <img src="/icons/ks-logo.png" />
                </div>
                <div className={menu ? 'fixed w-full h-full bg-[#1D2233] bg-opacity-50 delay-500 z-40' : 'fixed w-full h-full bg-[#1D2233] delay-100 -translate-x-full z-40'} onClick={()=>{toggleMenu()}}>
                    <div className={menu ? 'fixed w-1/2 md:w-1/3 lg:w-1/5 h-full bg-[#1D2233] transition ease-in-out delay-500 z-40' : 'fixed w-1/2 md:w-1/3 lg:w-1/5 h-full bg-[#1D2233] transition ease-in-out delay-500 -translate-x-full z-40'}>
                        <ul className="py-2 mt-20 md:mt-24 lg:mt-24 xl:mt-32 2xl:mt-36">
                            <a href="#home" onClick={()=>{toggleMenu()}}><li className="pl-5 md:pl-8 lg:pl-10 xl:pl-12 2xl:pl-16 py-2 hover:text-[#1D2233] hover:bg-[#BAC7CC] hover:scale-105">Home</li></a>
                            <a href="#about" onClick={()=>{toggleMenu()}}><li className="pl-5 md:pl-8 lg:pl-10 xl:pl-12 2xl:pl-16 py-2 hover:text-[#1D2233] hover:bg-[#BAC7CC] hover:scale-105">About Me</li></a>
                            <a href="#projects" onClick={()=>{toggleMenu()}}><li className="pl-5 md:pl-8 lg:pl-10 xl:pl-12 2xl:pl-16 py-2 hover:text-[#1D2233] hover:bg-[#BAC7CC] hover:scale-105">My Projects</li></a>
                            <a href="#skills" onClick={()=>{toggleMenu()}}><li className="pl-5 md:pl-8 lg:pl-10 xl:pl-12 2xl:pl-16 py-2 hover:text-[#1D2233] hover:bg-[#BAC7CC] hover:scale-105">My Skills</li></a>
                            <a href="#experience" onClick={()=>{toggleMenu()}}><li className="pl-5 md:pl-8 lg:pl-10 xl:pl-12 2xl:pl-16 py-2 hover:text-[#1D2233] hover:bg-[#BAC7CC] hover:scale-105">My Experience</li></a>
                            <a href="#contact" onClick={()=>{toggleMenu()}}><li className="pl-5 md:pl-8 lg:pl-10 xl:pl-12 2xl:pl-16 py-2 hover:text-[#1D2233] hover:bg-[#BAC7CC] hover:scale-105">Contact Me</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}