import { motion } from "framer-motion";

//variables
const stairAnimation = {
    initial: {
        top: '0%',
    },
    animate: {
        top: '100%'
    },
    exit: {
        top: ['100%', '0%']
    },
};

const reverseIndex = (index) => {
    const totalStep = 6;
    return totalStep - index - 1;
};

const Stairs = () => {
    return <>
    {/*Renders 6 motion divs, each representing a step of stair*
    Each div will have same animation defined by the stairAnimation object.
    The delay for each div is calculated sinamically based on its reversed index,
    creating a staggered effecr with decreasing delay for each subsequent step
    */}
    {[...Array(6)].map((_, index) => {
        return (
            <motion.div 
            key={index} 
            variants={stairAnimation} 
            initial='initial' 
            animate='animate'
            exit='exit'
            transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
            />
        );
    })}
    </>;
};

export default Stairs;