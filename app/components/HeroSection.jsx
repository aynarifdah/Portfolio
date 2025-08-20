"use client";
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return(
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div 
                className="lg:col-span-7 place-self-center text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <h1 className="text-white mb-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    Hello, I&apos;m 
                </h1>
                <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                   Ayna Dwi Rifdah
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    As a student in Software Development and Game Programming (PPLG), I focus on web development and enjoy creating digital experiences. Alongside that, I’m actively learning about Data Science and Machine Learning. I like to explore new ideas through projects, as I believe practical experience is the key to growth.   
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                    <motion.a
                        href="/projects"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-7 py-3 w-full sm:w-fit rounded-full text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_28px_rgba(56,189,248,0.45)] transition-shadow duration-300 text-center"
                    >
                        View Projects
                    </motion.a>
                    <motion.a
                        href="https://drive.google.com/file/d/1s8MgYWdKV2r_XJkKNmZo6UhU5WnWKECM/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-7 py-3 w-full sm:w-fit rounded-full border border-blue-500/60 text-white/90 hover:text-white bg-black/20 hover:bg-black/30 backdrop-blur-sm text-center"
                    >
                        Download CV
                    </motion.a>
                </div>
            </motion.div>

            <div className="lg:col-span-5 place-self-center">
                <motion.div 
                    className="rounded-full bg-[#0f0f0f] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
                >
                    <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-500/20 to-cyan-400/15 blur-2xl" />
                    <motion.div 
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-full h-full relative"
                    >
                        <Image 
                            src="/aynarifdah.png" 
                            alt="Ayna Rifdah" 
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300} 
                            height={300} 
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </section> 
  );
};

export default HeroSection;