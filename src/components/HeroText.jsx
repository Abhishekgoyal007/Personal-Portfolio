import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react'

const HeroText = () => {
    // Words that reflect your actual work and achievements
    const words = ['Scalable', 'Real Time', 'Innovative', 'Secure'];
    
    const variants = {
        hidden: {opacity: 0, x: -50},
        visible: {opacity: 1, x: 0}
    }
    
    return (
    <div 
        className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'
    >
        {/* Desktop view */}
        <div className='flex-col hidden md:flex c-space'>
            <motion.h1 
                variants={variants} 
                initial="hidden" 
                animate="visible" 
                transition={{delay: 1}} 
                className='text-4xl font-medium'
            >
                Hi there, I'm Abhishek
            </motion.h1>
            <div className='flex flex-col items-start'>
                <motion.p 
                    variants={variants} 
                    initial="hidden" 
                    animate="visible" 
                    transition={{delay: 1.2}} 
                    className='text-5xl font-medium text-neutral-300'
                >
                    Full-Stack Developer Building
                </motion.p>
                <motion.div
                    variants={variants} 
                    initial="hidden" 
                    animate="visible" 
                    transition={{delay: 1.5}}
                >
                    <FlipWords words={words} className='text-8xl font-black text-white' />
                </motion.div>
                <motion.p 
                    variants={variants} 
                    initial="hidden" 
                    animate="visible" 
                    transition={{delay: 1.8}} 
                    className='text-4xl font-medium text-neutral-300'
                >
                    Web3 & Modern Web Apps
                </motion.p>
            </div>
        </div>

        {/* Mobile view */}
        <div className='flex flex-col space-y-6 md:hidden'>
            <motion.p 
                variants={variants} 
                initial="hidden" 
                animate="visible" 
                transition={{delay: 1}} 
                className='text-4xl font-medium'
            >
                Hi there, I'm Abhishek
            </motion.p>
            <div>
                <motion.p 
                    variants={variants} 
                    initial="hidden" 
                    animate="visible" 
                    transition={{delay: 1.2}} 
                    className='text-5xl font-black text-neutral-300'
                >
                    Building
                </motion.p>
                <motion.div
                    variants={variants} 
                    initial="hidden" 
                    animate="visible" 
                    transition={{delay: 1.5}}
                >
                    <FlipWords words={words} className='text-7xl font-bold text-white' />
                </motion.div>
                <motion.p 
                    variants={variants} 
                    initial="hidden" 
                    animate="visible" 
                    transition={{delay: 1.8}} 
                    className='text-4xl font-black text-neutral-300'
                >
                    Web Solutions
                </motion.p>
            </div>
        </div>
    </div>
  )
}

export default HeroText