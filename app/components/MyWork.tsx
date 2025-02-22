"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Launch Emirates",
    description: "Helped in designing the website for Launch Emirates, a Website that provides end-to-end solutions to establish and scale your business in the UAE.",
    imageUrl: "/launch.png",
    category: "UX/UI Design",
    link: "https://www.launchemirates.me/",
  },
  {
    id: 2,
    title: "FoodSwap Website & Mobile App",
    description: "Helped in designing the UX and structure of the website.",
    imageUrl: "/foodswap.png",
    category: "UX/UI Design",
    link: "https://www.foodswap.org/",
  },
  {
    id: 3,
    title: "Semi Finalist of create apps championship",
    description: "Introduced by H.H Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum, My application got selected for the Best Youth Category for UX/UI and pitching.",
    imageUrl: "/createapps.png",
    category: "UI Design",
    link: "https://createapps.ae/en/create-apps-championship#:~:text=We%20are%20giving%20you%20the%20chance%20to%20get,the%20UAE%E2%80%99s%20flagship%20contest%20for%20Mobile%20App%20Development.",
  },
  {
    id: 4,
    title: "Kerala Development and Innovation Strategic Council (K-DISC)",
    description: "Worked on digital marketing for Kerala Development and Innovation Strategic Council (K-DISC), it is strategic think-tank advisory body of the Government of Kerala, formulating plans reflecting the latest in technology, product and process innovations for the development of the State. ",
    imageUrl: "/KDISC.png",
    category: "Digital Marketing",
    link: "https://kdisc.kerala.gov.in",
  },
  {
    id: 5,
    title: "SafeBite",
    description: "First ever made full functioning prototype UX/UI and AI Based application, Self made case study.",
    imageUrl: "/safebite.png",
    category: "UX/UI Design",
    link: "https://www.behance.net/gallery/211238161/SafeBite-Making-every-bite-a-safe-choice",
  },
  {
    id: 6,
    title: "FoodSwap",
    description: "Worked on benchmarking, branding and social media marketing for the FoodSwap Mobile App",
    imageUrl: "/foodswapmobile.png",
    category: "Digital Marketing",
    link: "https://www.instagram.com/foodswap.ae/",
  },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function MyWork() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="work" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">My Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of my projects in UX/UI design and digital marketing.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-primary-foreground scale-105 shadow-lg"
                  : "bg-background text-foreground border border-primary/20 hover:border-primary/50 hover:scale-105 hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/launch.png"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white text-center px-4">{project.description}</p>
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-primary mb-1">{project.category}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

