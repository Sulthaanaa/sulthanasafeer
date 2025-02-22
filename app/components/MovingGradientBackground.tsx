"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function MovingGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    let t = 0

    const getColors = () => {
      if (theme === "dark") {
        return {
          primary: "rgba(29, 78, 216, 0.2)", // dark blue
          secondary: "rgba(30, 64, 175, 0.2)", // slightly lighter blue
        }
      } else {
        return {
          primary: "rgba(59, 130, 246, 0.2)", // light blue
          secondary: "rgba(96, 165, 250, 0.2)", // slightly lighter blue
        }
      }
    }

    const animate = () => {
      const { primary, secondary } = getColors()

      t += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const x1 = Math.cos(t) * canvas.width
      const y1 = Math.sin(t) * canvas.height
      const x2 = Math.cos(t + Math.PI) * canvas.width
      const y2 = Math.sin(t + Math.PI) * canvas.height

      const movingGradient = ctx.createLinearGradient(x1, y1, x2, y2)
      movingGradient.addColorStop(0, primary)
      movingGradient.addColorStop(0.5, secondary)
      movingGradient.addColorStop(1, primary)

      ctx.fillStyle = movingGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

