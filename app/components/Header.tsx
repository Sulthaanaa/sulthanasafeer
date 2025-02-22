"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Sulthana Safeer</span>
            <img className="h-8 w-auto rounded-full" src="/Sul.png" alt="Sulthana Safeer" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="#about"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#work"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <div className="relative">
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors cursor-not-allowed"
            >
              Blog
            </button>
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded whitespace-nowrap"
                >
                  Coming Soon
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile menu with AnimatePresence and smooth animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            <motion.div
              className="fixed right-0 top-[72px] z-50 w-full overflow-hidden bg-background sm:max-w-sm border-t border-border"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="p-6">
                <div className="space-y-1">
                  <Link
                    href="#about"
                    className="block rounded-lg px-4 py-3 text-base font-semibold text-foreground hover:bg-primary/10 transition-colors"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                  <Link
                    href="#skills"
                    className="block rounded-lg px-4 py-3 text-base font-semibold text-foreground hover:bg-primary/10 transition-colors"
                    onClick={toggleMenu}
                  >
                    Skills
                  </Link>
                  <Link
                    href="#work"
                    className="block rounded-lg px-4 py-3 text-base font-semibold text-foreground hover:bg-primary/10 transition-colors"
                    onClick={toggleMenu}
                  >
                    Work
                  </Link>
                  <Link
                    href="#contact"
                    className="block rounded-lg px-4 py-3 text-base font-semibold text-foreground hover:bg-primary/10 transition-colors"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  {mounted && (
                    <button
                      onClick={() => {
                        setTheme(theme === "dark" ? "light" : "dark")
                        toggleMenu()
                      }}
                      className="w-full rounded-lg px-4 py-3 flex items-center gap-2 text-base font-semibold text-foreground hover:bg-primary/10 transition-colors"
                    >
                      {theme === "dark" ? (
                        <>
                          <SunIcon className="h-5 w-5" />
                          <span>Light Mode</span>
                        </>
                      ) : (
                        <>
                          <MoonIcon className="h-5 w-5" />
                          <span>Dark Mode</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
                <div className="relative py-2">
                  <button
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className="block w-full text-left px-4 py-2 text-base font-semibold text-foreground hover:bg-primary/10 transition-colors cursor-not-allowed"
                  >
                    Blog
                  </button>
                  <AnimatePresence>
                    {showTooltip && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded whitespace-nowrap"
                      >
                        Coming Soon
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

