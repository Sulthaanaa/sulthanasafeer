"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"

const skills = [
  {
    title: "UX Design",
    description: "Creating intuitive and user-friendly interfaces that enhance user satisfaction.",
    icon: "🎨",
  },
  {
    title: "UI Design",
    description: "Crafting visually appealing and consistent design systems.",
    icon: "✨",
  },
  {
    title: "Digital Marketing",
    description: "Developing and implementing effective marketing strategies across digital platforms.",
    icon: "📱",
  },
  {
    title: "Data Analysis",
    description: "Interpreting user data to inform design decisions and marketing strategies.",
    icon: "📊",
  },
  {
    title: "Prototyping",
    description: "Building interactive prototypes to test and refine user experiences.",
    icon: "🛠️",
  },
]

export default function SkillSet() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  return (
    <div id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">My Skill Set</h2>
        <motion.div ref={carousel} className="cursor-grab overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex flex-col md:flex-row"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] h-[400px] p-8 m-4 bg-black rounded-3xl shadow-lg flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out border border-pink-500/20 hover:border-pink-500/40 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

