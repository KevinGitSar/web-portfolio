import React, {useEffect, useRef} from "react"
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, width = "fit-content" }) => {

    const ref = useRef(null);
    const isInView = useInView(ref);

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        } else{
            mainControls.set("hidden");
        }
    }, [isInView]);

    return (
        <div ref={ref} style={{position: "relative", overflow:"hidden"}}>
            <motion.div 
                variants={{
                    hidden: {opacity: 0, y: 75 }, 
                    visible: {opacity: 1, y: 0} 
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: Math.random() * (1 - 0.5) + 0.5, delay:0.25}}
            >
                {children}
            </motion.div>
            {/* Add styles here */}
            <motion.div 
                variants={{
                    hidden: {left : 0},
                    visible: {left: "100%"},
                }}
                initial="hidden"
                animate={slideControls}
                transition={{duration: Math.random() * (1 - 0.8) + 0.5, ease: "easeIn"}}
                style={{
                    position: "absolute",
                    top: 2,
                    bottom: 2,
                    left: 0,
                    right: 0,
                    background: "#3FAA95",
                    zIndex: 20,
                }}
                >
            </motion.div>
        </div>
    );
};

export default Reveal;
