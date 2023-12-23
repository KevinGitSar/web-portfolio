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
                <div className="fixed border border-black w-[50px] m-2 cursor-pointer z-10" onClick={()=>{toggleMenu()}}>
                    <img src="/icons/ks-logo.png" />
                </div>
                <div className={menu ? 'fixed w-full h-full bg-[#ebeaea] transition ease-in-out delay-500' : 'fixed w-full h-full bg-[#ebeaea] transition ease-in-out delay-100 -translate-x-full'}>
                    <ul className="pl-2 py-2 mt-16">
                        <li className="py-2">
                            About me.
                        </li>
                        <li className="py-2">
                            My projects.
                        </li>
                        <li className="py-2">
                            My resume.
                        </li>
                        <li className="py-2">
                            Contact me.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}