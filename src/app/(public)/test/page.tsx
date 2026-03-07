'use client'
import { useCallback, useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { AnimatePresence, motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import SnowParticles from "@/app/(public)/test/SnowParticles"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { destinations } from "@/data"
import { Progress } from "@/components/ui/progress"

export interface Destination {
    title: string
    subtitle: string
    duration: string
    difficulty: string
    image: string
    description: string
}

const AUTO_ADVANCE_MS = 5000
const SPRING_CONFIG = { stiffness: 80, damping: 20, mass: 0.8 }

export default function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isScrollControlled, setIsScrollControlled] = useState(false)

    const progressRef = useRef(0)
    const rafRef = useRef<number | undefined>(undefined)
    const lastTimeRef = useRef(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const sectionRef = useRef<HTMLElement>(null)
    const timerPausedRef = useRef(false)

    const { scrollY } = useScroll({ target: sectionRef })
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] })

    const rawBgY = useTransform(scrollY, [0, 800], [0, 120])
    const bgY = useSpring(rawBgY, SPRING_CONFIG)

    const rawOverlay = useTransform(scrollY, [0, 600], [1, 0.25])
    const overlayOpacity = useSpring(rawOverlay, SPRING_CONFIG)

    const rawContentOpacity = useTransform(scrollY, [0, 400], [1, 0])
    const contentOpacity = useSpring(rawContentOpacity, SPRING_CONFIG)

    const rawContentY = useTransform(scrollY, [0, 400], [0, -60])
    const contentY = useSpring(rawContentY, SPRING_CONFIG)

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        const threshold = 0.05
        if (v > threshold) {
            timerPausedRef.current = true
            setIsScrollControlled(true)
            const sectionSize = 1 / destinations.length
            const raw = Math.floor(v / sectionSize)
            const clamped = Math.min(raw, destinations.length - 1)
            setActiveIndex((prev) => (prev !== clamped ? clamped : prev))
        } else {
            timerPausedRef.current = false
            setIsScrollControlled(false)
        }
    })

    useEffect(() => {
        if (isScrollControlled) return

        progressRef.current = 0
        lastTimeRef.current = performance.now()

        const tick = (now: number) => {
            if (timerPausedRef.current) {
                lastTimeRef.current = now
                rafRef.current = requestAnimationFrame(tick)
                return
            }

            const delta = now - lastTimeRef.current
            lastTimeRef.current = now
            progressRef.current += delta / AUTO_ADVANCE_MS

            if (progressRef.current >= 1) {
                setActiveIndex((prev) => (prev + 1) % destinations.length)
                return
            }

            setProgress(progressRef.current)
            rafRef.current = requestAnimationFrame(tick)
        }

        rafRef.current = requestAnimationFrame(tick)
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [activeIndex, isScrollControlled])

    useEffect(() => {
        const container = containerRef.current
        if (!container) return
        const activeItem = container.children[activeIndex] as HTMLElement
        if (!activeItem) return
        const containerWidth = container.offsetWidth
        const itemLeft = activeItem.offsetLeft
        const itemWidth = activeItem.offsetWidth
        container.scrollTo({
            left: itemLeft - containerWidth / 2 + itemWidth / 2,
            behavior: "smooth",
        })
    }, [activeIndex])

    const goTo = useCallback((index: number) => {
        timerPausedRef.current = false
        setIsScrollControlled(false)
        setActiveIndex(index)
    }, [])

    const current = destinations[activeIndex]

    return (
        <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-background">
            <AnimatePresence mode="sync">
                <motion.div
                    key={activeIndex}
                    className="absolute inset-0 will-change-transform"
                    style={{ y: bgY }}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <Image
                        fill
                        src={current.image}
                        alt={current.title}
                        className="h-[120%] w-full object-cover"
                        loading="eager"
                        priority
                        sizes="100vw"
                    />
                </motion.div>
            </AnimatePresence>

            <motion.div
                className="absolute inset-0 z-[1] bg-background/40"
                style={{ opacity: overlayOpacity }}
            />

            <div
                className="absolute inset-0 z-[2] pointer-events-none"
                style={{ boxShadow: "inset 0 0 180px 80px hsla(220, 20%, 5%, 0.55)" }}
            />

            <SnowParticles />

            <motion.div
                className="relative z-20 flex h-full flex-col justify-end px-6 pb-8 md:px-16 lg:px-24"
                style={{ opacity: contentOpacity, y: contentY }}
            >
                <div className="mx-auto w-full">
                    <div className="mb-8 md:mb-12 max-w-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -16, filter: "blur(2px)" }}
                                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                <Badge variant="default" className={cn("border bg-primary/60 border-primary")}>
                                    {current.difficulty} · {current.duration}
                                </Badge>

                                <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl text-foreground drop-shadow-lg">
                                    {current.title}
                                </h1>

                                <p className="mt-4 max-w-lg text-base font-body text-foreground/60 md:text-lg leading-relaxed">
                                    {current.subtitle}
                                </p>

                                <div className="mt-8 flex gap-4">
                                    <Button variant="default" className="group">
                                        View Details
                                        <ArrowRight className={cn("ml-1 h-4 w-4", "group-hover:-rotate-45 transition")} />
                                    </Button>
                                    <Button variant="outline" className="border border-primary! text-white!">
                                        All Treks
                                    </Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className={cn("flex gap-3 overflow-x-auto pb-1 no-scrollbar")} ref={containerRef}>
                        {destinations.map((dest, index) => {
                            const isActive = activeIndex === index
                            return (
                                <button
                                    key={index}
                                    onClick={() => goTo(index)}
                                    className={cn(
                                        "group relative shrink-0 w-44 md:w-52 rounded-xl overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                                        isActive ? "backdrop-blur-2xl scale-[1.02]" : "hover:scale-[1.01]"
                                    )}
                                >
                                    <div className="aspect-16/10 relative overflow-hidden">
                                        <Image
                                            fill
                                            src={dest.image}
                                            alt={dest.title}
                                            className={cn(
                                                "object-cover transition-transform duration-700",
                                                isActive ? "scale-110" : "group-hover:scale-105"
                                            )}
                                            loading="lazy"
                                            sizes="(max-width: 768px) 176px, 208px"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/30 to-transparent" />
                                    </div>

                                    <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 p-3">
                                        <p className={cn(
                                            "text-xs font-display font-semibold transition-colors truncate",
                                            isActive ? "text-primary" : "text-foreground/80"
                                        )}>
                                            {dest.title}
                                        </p>
                                        <p className="text-[10px] font-body text-foreground/40 mt-0.5">
                                            {dest.duration}
                                        </p>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground/5">
                                        {isActive && !isScrollControlled && (
                                            <Progress
                                                value={progress * 100}
                                                className="h-1 w-full transition-all duration-75 ease-linear"
                                            />
                                        )}
                                        {isActive && isScrollControlled && (
                                            <div className="h-1 w-full bg-primary/80" />
                                        )}
                                    </div>
                                </button>
                            )
                        })}
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                        {destinations.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={cn(
                                    "h-1 rounded-full transition-all duration-500",
                                    activeIndex === i
                                        ? "w-8 bg-primary/80"
                                        : "w-2 bg-foreground/20 hover:bg-foreground/40"
                                )}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                        <span className="ml-3 text-xs font-body text-foreground/30 tabular-nums">
              {String(activeIndex + 1).padStart(2, "0")} / {String(destinations.length).padStart(2, "0")}
            </span>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}