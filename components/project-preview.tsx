"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BsFillArrowRightSquareFill } from "react-icons/bs"
import { cn } from "@/lib/utils"

interface Project {
  title: string
  description: string
  image: string
  subtitle: string
  url: string
}

const projects: Project[] = [
  {
    title: "Sit In Shade",
    subtitle: "Find best bus seat to avoid the sun while traveling",
    description: "Featured on HackerNews #1, ProductHunt, StackOverFlow Blog and more. Helped over 150000+ travellers.",
    image: "/sitinshade-preview.webp",
    url: "https://sitinshade.com"
  },
  {
    title: "Pookkalam.dev",
    subtitle: "Create Pookkalam online,no flowers harmed",
    description: "Create your own Pookkalam, explore beautiful Pookkalam designs, patterns, and layouts.",
    image: "/pookkalam-preview.webp",
    url: "https://pookkalam.dev"
  },
  {
    title: "Kochi Metro 'Realtime' Map",
    subtitle: "KMRL publishes data, I make cool maps",
    description: "Get Kochi Metro timings, live train tracking, and fare calculation on an interactive map.",
    image: "/metro-preview.webp",
    url: "https://kochimetro.keralam.co"
  },
  {
    title: "LoremMalayalam.in",
    subtitle: "Dummy text generator for Malayalam",
    description: "Create Malayalam Dummy text by random,from wikipedia or by lorem ipsum.",
    image: "/loremmalayalam-preview.webp",
    url: "https://loremmalayalam.in"
  },
  {
    title: "Kerala Dam Levels",
    subtitle: "A dashboard to monitor water levels of dams in Kerala",
    description: "Monitor real-time water levels of dams in Kerala. View interactive maps, charts, and historical data for Kerala's major dams",
    image: "/damstats-preview.webp",
    url: "https://damstats.amithv.xyz"
  },
  {
    title: "KTU Stats",
    subtitle: "Analyse college wise KTU results",
    description: "Find the top engineering colleges in Kerala based on KTU exam results. Compare pass percentages, rankings, and historical performance of colleges under KTU",
    image: "/ktustats-preview.webp",
    url: "https://ktustats.amithv.xyz"
  },
  {
    title: "Private Bus Timings",
    subtitle: "An API to get private bus timings in Kerala",
    description: "API desigined to get private bus timings in Kerala. Get bus timings, routes, and schedules of private buses in Kerala",
    image: "/busapi-preview.webp",
    url: "https://github.com/amith-vp/Kerala-Private-Bus-Timing"
  },
  {
    title: "Vakdhwani",
    subtitle: "Get Malayalam pronuciation of English words",
    description: "An IPA based Malayalam pronunciation dictionary for English words. Get the Malayalam pronunciation of English words using the International Phonetic Alphabet",
    image: "/pronoune-preview.webp",
    url: "https://pronounce.loremmalayalam.in"
  },
  {
    title: "Malayalam Songs Live",
    subtitle: "24*7 Malayalam songs live",
    description: "*Discontinued",
    image: "/malayalamsong-preview.webp",
    url: "https://www.youtube.com/@malayalamsongslive"
  }
]

export function ProjectList() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  useEffect(() => {
    projects.forEach(project => {
      const img = new Image()
      img.src = project.image
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(project.image))
      }
    })

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleProjectClick = (project: Project) => {
    if (isMobile) {
      setActiveProject(project)
    } else {
      window.open(project.url, '_blank')
    }
  }

  const isImageLoaded = (imageSrc: string) => loadedImages.has(imageSrc)

  return (
    <div className="relative">
      {/* Projects List */}
      <motion.div 
        className="space-y-2 max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {projects.map((project, index) => (
          <motion.button
            key={project.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => handleProjectClick(project)}
            onMouseEnter={() => {
              setActiveProject(project)
              setHoveredProject(project)
            }}
            onMouseLeave={() => {
              setActiveProject(null)
              setHoveredProject(null)
            }}
            className="w-full flex items-center justify-between text-black dark:text-white hover:opacity-70 transition-opacity text-left"
          >
            <div>
              <span className={cn(
                "text-sm transition-colors duration-300",
                hoveredProject?.title === project.title ? "text-blue-600 dark:text-blue-400" : ""
              )}>{project.title}</span>
              {/* <p className="text-neutral-600 dark:text-neutral-400 text-xs">{project.subtitle}</p> */}
            </div>
            <BsFillArrowRightSquareFill size={16} className="text-neutral-600 dark:text-neutral-600 flex-shrink-0" />
          </motion.button>
        ))}
      </motion.div>

      {/* Desktop Preview Card */}
      <div className="hidden md:block fixed top-24 left-[calc(50%+14rem)] w-[360px]">
        <AnimatePresence mode="wait">
          {activeProject && (
            <motion.div
              key={activeProject.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-neutral-200 dark:border-neutral-800 font-jetbrains cursor-pointer transition-transform duration-300 hover:scale-105 p-4"
              onClick={() => window.open(activeProject.url, '_blank')}
            >
              <div className="relative h-[180px] w-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden rounded-lg mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                <motion.img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className={cn(
                    "object-cover w-full h-full transition-all duration-500 hover:scale-105",
                    !isImageLoaded(activeProject.image) && "opacity-0"
                  )}
                />
                {!isImageLoaded(activeProject.image) && (
                  <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-700 animate-pulse" />
                )}
              </div>
              <div>
                <h3 className="text-black dark:text-white text-lg font-medium mb-1.5">
                  {activeProject.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-xs mb-2">
                  {activeProject.subtitle}
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">
                  {activeProject.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Popup */}
      <AnimatePresence>
        {isMobile && activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg font-jetbrains w-full max-w-[90vw] max-h-[90vh] relative border border-neutral-200 dark:border-neutral-800 p-4"
            >
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveProject(null);
                }}
                className="absolute top-6 right-6 z-10 w-8 h-8 flex items-center justify-center bg-black/50 rounded-full text-white"
              >
                ×
              </button>
              <div className="relative h-[180px] w-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden rounded-lg mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                <motion.img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className={cn(
                    "object-cover w-full h-full transition-all duration-500",
                    !isImageLoaded(activeProject.image) && "opacity-0"
                  )}
                />
                {!isImageLoaded(activeProject.image) && (
                  <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-700 animate-pulse" />
                )}
              </div>
              <div>
                <h3 className="text-black dark:text-white text-lg font-medium mb-1.5">
                  {activeProject.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-xs mb-2">
                  {activeProject.subtitle}
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">
                  {activeProject.description}
                </p>
                <button
                  onClick={() => window.open(activeProject.url, '_blank')}
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 text-sm font-medium transition-colors"
                >
                  Visit Project
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

