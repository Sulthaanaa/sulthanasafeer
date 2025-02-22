"use client"

import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm Sulthana Safeer, a passionate UX/UI Marketing Associate with a knack for creating user-centric designs
            and implementing effective marketing strategies. With a blend of creativity and analytical thinking, I
            strive to bridge the gap between user needs and business goals.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">My Approach</h3>
            <p className="text-muted-foreground">
              I believe in a holistic approach to UX/UI and marketing. By combining user research, data-driven insights,
              and creative design, I create experiences that not only look great but also perform exceptionally well.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
            <p className="text-muted-foreground">
              With a background in both design and marketing, I've had the opportunity to work on diverse projects
              across various industries. This experience has honed my skills in creating cohesive brand experiences that
              resonate with users and drive business growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

