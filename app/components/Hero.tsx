"use client"

import { motion, useAnimation } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useState, useEffect } from "react"

// Add this new component for the background pattern
function BackgroundPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Radial glow effects */}
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-[100px]" />
      <div className="absolute right-0 top-0 -z-10 h-[300px] w-[300px] rounded-full bg-pink-300/20 blur-[100px]" />
      
      {/* Animated dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-pink-500/30"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursorAnimation = useAnimation()

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  useEffect(() => {
    cursorAnimation.start({
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: { type: "spring", mass: 0.6 },
    })
  }, [mousePosition, cursorAnimation])

  const roles = ["UX/UI Designer", 2000, "Marketing Associate", 2000, "Computer System Engineering Graduate", 2000]

  return (
    <div className="relative isolate overflow-hidden bg-black min-h-screen flex items-center">
      <BackgroundPattern />
      
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-pink-500 pointer-events-none z-50 hidden md:block"
        animate={cursorAnimation}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:text-left text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-4 font-sans">
                <span className="bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text tracking-wider">
                  Sulthana Safeer
                </span>
              </h1>
              <div className="text-2xl sm:text-3xl font-semibold text-white h-[60px] tracking-wide">
                <TypeAnimation sequence={roles} wrapper="span" speed={50} repeat={Number.POSITIVE_INFINITY} />
              </div>
            </motion.div>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-300 lg:text-left text-center font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crafting delightful digital experiences through intuitive design and data-driven marketing strategies.
            </motion.p>
            <motion.div
              className="mt-10 flex items-center lg:justify-start justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#contact" className="apple-button">
                Download CV
              </a>
              <a href="#work" className="text-sm font-semibold leading-6 text-white tracking-wider hover:text-pink-400 transition-colors">
                View My Work <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>

          <InteractiveImage />
        </div>
      </div>
    </div>
  )
}

function InteractiveImage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative max-w-[600px] mx-auto"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 to-pink-300/30 rounded-full blur-3xl" />
        <img
          src="/Untitled (86).png"
          alt="Sulthana Safeer"
          width={700}
          height={700}
          className="relative w-full max-w-[600px] rounded-2xl shadow-xl ring-1 ring-gray-900/10 z-10 mx-auto lg:mx-0 object-cover"
        />
        <motion.div
          className="absolute -top-4 -right-4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1,
            opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5,
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-300/20 rounded-full blur-xl"
          animate={{
            scale: isHovered ? [1, 1.3, 1] : 1,
            opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5,
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>
    </motion.div>
  )
}

