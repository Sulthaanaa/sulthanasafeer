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
          Results-driven UX/UI Designer with a proven track record in creating intuitive user interfaces and enhancing user experiences for
 innovative projects, including Biebite, a semi-finalist at the App Olympics, which was announced by H.H. Sheikh Hamdan bin
 Mohammed bin Rashid Al Maktoum. Contributed as Marketing Associate (UX/UI) at FoodSwap and the Launch Emirates
 initiative at SinX Solutions. Proficient in Figma, V0, Bolt, and Magic UI, applying iterative design processes to meet strategic
 goals. Gained experience in digital marketing through an internship with the Kerala Development and Innovation Strategic
 Council, managing content strategies and social media engagement. Honed design expertise at Publicis Sapient, delivering user
 centered solutions. Founder of the Middlesex University Dubai Cyber Club, recognized with the Student Award for Club
 Coordinator.
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
              I believe in a holistic approach to UX/UI and marketing. I use what I learn from talking to users, digging into the data, and getting creative with design to build experiences that not only look good but actually work the way people need them to.
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

