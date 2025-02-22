import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import SkillSet from "./components/SkillSet"
import MyWork from "./components/MyWork"
import Experience from "./components/Experience"
import Achievements from "./components/Achievements"
import Marquee from "./components/Marquee"
import ContactForm from "./components/ContactForm"
import NewsletterSubscribe from "./components/NewsletterSubscribe"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <SkillSet />
      <MyWork />
      <Experience />
      <Achievements />
      <Marquee />
      <ContactForm />
      <NewsletterSubscribe />
    </>
  )
}

