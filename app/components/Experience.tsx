"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useSpring, useInView } from "framer-motion"
import { Calendar, Award, Briefcase, Code, Lightbulb } from "lucide-react"

const experiences = [
  {
    year: "2023",
    title: "Experience Designer & Software intern",
    company: "Publicis Sapient",
    description: "Worked as a web designer/ creative intern on projects for Saudi Arabia's upcoming ventures.",
    details: "More of a student experience, did competitive analysis, competitor benchmarking, and created wireframes for the projects.",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    year: "2023-2024",
    title: "Cyber Club Founder CEI DEPT",
    company: "Middlesex University Dubai",
    description: "Founder of the first technology-based club at Middlesex University under Computer Engineering and Informatics' department & Student activities department",
    details: "The club's main goal is to bring together students from various academic fields (such as business, marketing, graphic design, etc.) so they can collaborate on innovative technical projects and learn from the club.",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    year: "2024",
    title: "Digital Marketing Intern",
    company: "Kerala Development and Innovation Strategic Council (K-DISC)",
    description: "Assist in creating engaging content for various digital platforms and social media platforms.",
    details: "-Assist in creating engaging content for various digital platforms, including social media, blogs, email newsletters, and websites. Help manage and grow KKEM's social media presence on platforms such as Facebook, Twitter, LinkedIn, and Instagram.Prepare and contribute to digital ad campaigns across various platforms.Assist in creating and executing email marketing campaigns, including template design, list segmentation, and performance analysis.Conduct market research to identify trends, audience preferences, and the competitive landscape, providing insights to refine marketing strategies.Prepare campaign strategies and assist in developing promotional materials and onlineadvertisements.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    year: "2024",
    title: "User Experience Designer",
    company: "SinX Solutions",
    description: "Designed Launch Emirates' website and created a user-friendly interface for the website.",
    details: "Launch Emirates provides end-to-end solutions to establish and scale your business in the UAE. We help brands go from zero to one and beyond.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    year: "2025",
    title: "Marketing Associate UX UI",
    company: "FoodSwap",
    description: "Assisted in various design projects, worked on marketing campaigns digitally and offline, learned industry best practices",
    details: "Contributed to the redesign of the company's application, created a user-friendly interface for the application. An application that is an #1 Food item matchmaker AI-Powered menu management platform helping restaurant become data-driven",
    icon: <Calendar className="w-6 h-6" />,
  },
]

// Add this CSS to your globals.css file
const cursorStyles = {
  clickMe: {
    content: '"Click me!"',
    position: 'absolute',
    top: '-25px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'hsl(var(--primary))',
    color: 'hsl(var(--primary-foreground))',
    padding: '4px 8px',
    borderRadius: '9999px',
    fontSize: '12px',
    pointerEvents: 'none',
    whiteSpace: 'nowrap',
    opacity: 0,
    transition: 'opacity 0.2s ease-in-out',
  }
}

export default function Experience() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section ref={containerRef} id="experience" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">My Experience</h2>
          <p className="mt-4 text-lg text-muted-foreground">A journey through my professional growth</p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"
            style={{ scaleY }}
          />

          {experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.year}
              experience={experience}
              index={index}
              isExpanded={expandedExperience === index}
              onToggle={() => setExpandedExperience(expandedExperience === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({
  experience,
  index,
  isExpanded,
  onToggle,
}: {
  experience: (typeof experiences)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [showCursor, setShowCursor] = useState(false)

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />
      <div className="z-20">
        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full text-primary">
          {experience.icon}
        </div>
      </div>
      <motion.div
        className="w-5/12 cursor-pointer group relative"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onToggle}
        onMouseEnter={() => !isExpanded && setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
      >
        <div className="p-6 bg-background rounded-lg shadow-md border border-primary/10 hover:border-primary/20 transition-colors">
          <span className="font-bold text-primary">{experience.year}</span>
          <h3 className="text-lg font-semibold mb-1">{experience.title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{experience.company}</p>
          <p className="text-muted-foreground">{experience.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm text-muted-foreground">{experience.details}</p>
          </motion.div>
        </div>
        
        {/* Floating "Click me!" cursor - only show when not expanded */}
        {!isExpanded && (
          <motion.div
            className="absolute pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: showCursor ? 1 : 0,
              y: showCursor ? [-5, 5, -5] : 0,
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }
            }}
            style={{
              ...cursorStyles.clickMe,
              opacity: showCursor ? 1 : 0,
            }}
          >
            Click me!
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

