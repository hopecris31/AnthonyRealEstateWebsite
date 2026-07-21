import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import heroImage from '../../assets/hero.png'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.25,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.9, ease: 'easeOut' },
    },
}

function HeroSection() {
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4])
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
    const blur = useTransform(scrollYProgress, [0, 1], [0, 8])
    const blurFilter = useTransform(blur, (value) => `blur(${value}px)`)

    return (
        <section ref={containerRef} id="hero-section" className="relative h-[200vh] -mt-32">
            <div className="sticky top-0 h-screen overflow-hidden">
                <motion.img
                    src={heroImage}
                    alt="Beautiful home"
                    style={{ scale, filter: blurFilter }}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <motion.div
                    style={{ opacity }}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="font-title text-5xl md:text-7xl font-bold"
                    >
                        Your Home: Our Mission
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mt-4 text-lg md:text-2xl font-light"
                    >
                        Every step of the way
                    </motion.p>

                    <motion.button
                        variants={itemVariants}
                        className="mt-8 px-8 py-3 bg-white text-black rounded-md font-medium hover:scale-105 transition-transform duration-200"
                    >
                        Get Started
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection