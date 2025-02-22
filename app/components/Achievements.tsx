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
    description: "App olympics 2024 - 2025, got selected out of 4000+ participants for the Best Youth App, singlehandedly created a prototype for BieBite",
  },
  {
    image: "kindness.jpg",
    title: "Kindness Ambassador for YouthX GITEX",
    description: "One of the  ambassadors for YouthX GITEX 2024, was responsible for the kindness corner at the event",
  },
  {
    image: "delegate.jpg",
    title: "Delegate for Dubai World Congress for Self-Driving Transport",
    description: "",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-12 md:py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground sm:text-4xl">My Achievements 🏆</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground">A sneak peek at what I've been up to</p>
        </motion.div>

        <LoopingBanner />
      </div>
    </section>
  )
}

function LoopingBanner() {
  const bannerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const x = useMotionValue(0)
  const cardWidth = isMobile ? 260 : 320
  const totalWidth = cardWidth * achievements.length

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useAnimationFrame(() => {
    if ((!isHovered && !isDragging) || (isMobile && !isDragging)) {
      const xValue = x.get()
      if (xValue <= -totalWidth) {
        x.set(0)
      } else {
        x.set(xValue - 0.7) // Medium speed for better readability
      }
    }
  })

  return (
    <div 
      className="overflow-hidden" 
      ref={bannerRef}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <motion.div 
        className="flex gap-3 md:gap-6 py-2 md:py-4" 
        style={{ x }}
        drag="x"
        dragConstraints={{
          left: -totalWidth,
          right: 0
        }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => {
          setIsDragging(false)
          // Optional: Snap to nearest card
          const currentX = x.get()
          const nearestCard = Math.round(currentX / cardWidth) * cardWidth
          x.set(nearestCard)
        }}
        dragElastic={0.1}
        dragMomentum={false}
      >
        {[...achievements, ...achievements, ...achievements].map((achievement, index) => (
          <AchievementCard key={index} {...achievement} isMobile={isMobile} />
        ))}
      </motion.div>
    </div>
  )
}

function AchievementCard({ image, title, description, isMobile }: (typeof achievements)[0] & { isMobile: boolean }) {
  return (
    <motion.div
      className="flex-shrink-0 w-[260px] md:w-72 bg-background rounded-lg shadow-lg overflow-hidden border border-primary/10 hover:border-primary/20 transition-colors"
      whileHover={{ y: isMobile ? 0 : -5 }}
      transition={{ duration: 0.2 }}
      whileTap={{ scale: 0.98 }} // Add feedback for touch
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={200}
        height={200}
        className="w-full h-28 md:h-40 object-cover"
        priority={true}
      />
      <div className="p-2.5 md:p-4">
        <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 line-clamp-2">{title}</h3>
        <p className="text-xs md:text-sm text-muted-foreground line-clamp-3">{description}</p>
      </div>
    </motion.div>
  )
}

