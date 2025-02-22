"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion"
import Image from "next/image"

const achievements = [
  {
    image: "graduate.jpg",
    title: "First Class Honors B.Eng Computer System Engineering",
    description: "Recieved a First Class Honors in my Bachelors Degree for computer system engineering with the score of 3.5+ GPA",
  },
  {
    image: "cyber.jpg",
    title: "Student Awards For Club Coordinator",
    description: "Awarded for being the Club Coordinator -  managing, leading and contribution to cyber club",
  },
  {
    image: "semi.jpg",
    title: "Semi Finalist in the UAE's Create Apps championship",
    description: "Redesigned e-commerce platform resulting in a 200% increase in conversion rates",
  },
  {
    image: "kindness.jpg",
    title: "Kindness Ambassador for YouthX GITEX",
    description: "Designed interfaces used by over 1 million users worldwide",
  },
  {
    image: "delegate.jpg",
    title: "Delegate for Dubai World Congress for Self-Driving Transport",
    description: "Invited as a keynote speaker at multiple international UX/UI conferences",
  },
]

export default function Achievements() {
  return (
    <section id="achievements " className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">My Achievements 🏆</h2>
          <p className="mt-4 text-lg text-muted-foreground">A showcase of my professional accomplishments</p>
        </motion.div>

        <LoopingBanner />
      </div>
    </section>
  )
}

function LoopingBanner() {
  const bannerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const cardWidth = 320 // width of card + gap (w-72 = 288px + 32px gap)
  const totalWidth = cardWidth * achievements.length

  useAnimationFrame(() => {
    if (!isHovered) {
      const xValue = x.get()
      // Reset position smoothly when reaching the end
      if (xValue <= -totalWidth) {
        x.set(0)
      } else {
        x.set(xValue - 0.5) // Reduced speed from 2 to 0.5 for slower motion
      }
    }
  })

  return (
    <div 
      className="overflow-hidden" 
      ref={bannerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="flex gap-8 py-4" 
        style={{ x }}
      >
        {[...achievements, ...achievements, ...achievements, ...achievements].map((achievement, index) => (
          <AchievementCard key={index} {...achievement} />
        ))}
      </motion.div>
    </div>
  )
}

function AchievementCard({ image, title, description }: (typeof achievements)[0]) {
  return (
    <motion.div
      className="flex-shrink-0 w-72 bg-background rounded-lg shadow-lg overflow-hidden border border-primary/10 hover:border-primary/20 transition-colors"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={200}
        height={200}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  )
}

