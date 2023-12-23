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
            <div className="">
                <div className="fixed border border-[#379683] w-[50px] m-2 cursor-pointer z-10 transition ease-in-out delay-100 hover:scale-105" onClick={()=>{toggleMenu()}}>
                    <img src="/icons/ks-logo.png" />
                </div>
                <div className={menu ? 'fixed w-full h-full bg-[#1D2233] transition ease-in-out delay-500' : 'fixed w-full h-full bg-[#1D2233] transition ease-in-out delay-100 -translate-x-full'}>
                    <ul className="py-2 mt-16">
                        <a href="#home" onClick={()=>{toggleMenu()}}><li className="pl-2 py-2 hover:text-[#1D2233] hover:bg-[#BAC7CC]">Home</li></a>
                        <a href="#about" onClick={()=>{toggleMenu()}}><li className="pl-2 py-2 hover:text-[#1D2233] hover:bg-[#BAC7CC]">About Me</li></a>
                        <a href="#projects" onClick={()=>{toggleMenu()}}><li className="pl-2 py-2 hover:text-[#1D2233] hover:bg-[#BAC7CC]">My Projects</li></a>
                        <a href="" onClick={()=>{toggleMenu()}}><li className="pl-2 py-2 hover:text-[#1D2233] hover:bg-[#BAC7CC]">My Resume</li></a>
                        <a href="" onClick={()=>{toggleMenu()}}><li className="pl-2 py-2 hover:text-[#1D2233] hover:bg-[#BAC7CC]">Contact Me</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}