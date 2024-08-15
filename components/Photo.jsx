"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            {/* Photo */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 0.5,
                        duration: 0.4,
                        ease: "easeInOut",
                    },
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 1,
                            duration: 0.4,
                            ease: "easeIn",
                        },
                    }}
                    className="w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] mix-blend-lighten absolute"
                >
                    <Image
                        src="/img/sacha.png"
                        priority
                        quality={100}
                        fill
                        alt=""
                        className="object-contain brightness-90 hover:brightness-105 hover:transition-all duration-500"
                    />
                </motion.div>
                <motion.svg
                    className="w-[300px] h-[300px] lg:w-[506px] lg:h-[506px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="hsl(var(--primary))"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: [
                                "15 60 12 12",
                                "16 25 92 72",
                                "4 125 11 11",
                            ],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;
