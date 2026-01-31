"use client";
import { motion } from 'motion/react';
import BackgroundSVG from "./BackgroundSVG";
import bg from "../../public/images/oooscillate.svg";
import Image from "next/image";

const SaherdHearoSection = (props: { title: string }) => {
    return (
        <div className="w-full h-[50vh] relative text-center">

            <Image src={bg} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover" />

            <div className="text-[72px] font-beiruti relative top-32">
                {/* Main background element with floating animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 150 }}
                    className="w-1/4 h-full bg-primary/20 absolute top-10 left-[48%] translate-x-[-50%] rounded-2xl z-10"
                >
                    <motion.div
                        animate={{ y: [0, -8, 0], scale: [1, 1.02, 1] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-full rounded-2xl bg-primary/20"
                    />
                </motion.div>

                {/* Accent element - right side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -15 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
                    className="absolute top-15 right-[40%] translate-x-[-50%] z-0"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        className="w-1/12 h-20 bg-accent/50 rounded-2xl"
                    />
                </motion.div>

                {/* Highlight element - small circle */}
                <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: 10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
                    className="absolute top-10 left-[40%] translate-x-[-50%] z-0"
                >
                    <motion.div
                        animate={{ y: [0, -6, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                        className="w-10 h-10 bg-highlight/50 rounded-2xl"
                    />
                </motion.div>

                {/* Neutral element - tall rectangle */}
                <motion.div
                    initial={{ opacity: 0, scale: 0, x: -30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 180 }}
                    className="absolute top-0 left-[50%] translate-x-[-50%] z-0"
                >
                    <motion.div
                        animate={{ y: [0, -12, 0], rotate: [0, 50, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                        className="w-20 h-20 bg-neutral/50 rounded-2xl"
                    />
                </motion.div>

                {/* Title text with entrance animation */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="relative z-20 text-primary text-shadow-lg font-semibold"
                >
                    {props.title}
                </motion.span>
            </div>
        </div>
    );
};

export default SaherdHearoSection;
