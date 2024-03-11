'use client'
import { useEffect } from "react"

export default function Cursor(props){
    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseY = e.clientY;
            const mouseX = e.clientX;
    
            const cursorCircle = document.getElementById("cursor__circle");
    
            if (cursorCircle) {
                cursorCircle.style.opacity = "1";
    
                cursorCircle.animate(
                    {
                        left: `${mouseX}px`,
                        top: `${mouseY}px`,
                    },
                    { duration: 1500, fill: "forwards" }
                );
            }
        };
    
        document.addEventListener("mousemove", handleMouseMove);
    
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    


    return(
        <>
            <div id="cursor__circle" className="fixed w-20 h-20 z-30 rounded-full flex justify-center items-center backdrop-blur-3xl transform duration-300 ml-10">
                <div className="absolute rounded-full w-12 h-12 bg-white motion-safe:animate-ping"></div>
                <div className="w-full flex bg-[#3FAA95] justify-center items-center backdrop-blur-3xl h-full rounded-full text-center">
                    <p className="select-none">Mouse Buddy</p>
                </div>
            </div>
      </>
    )
}