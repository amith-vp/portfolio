"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Clock } from "@/components/clock"
import { ProjectList } from "@/components/project-preview"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"
import { SiGithub, SiX, SiLinkedin, SiTelegram, SiReddit, SiDiscord, SiGmail, SiBuymeacoffee } from "react-icons/si"

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const previousRolesVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  const [showPreviousRoles, setShowPreviousRoles] = useState(false);
  const { scrollY } = useScroll();
  
  const clockX = useTransform(scrollY, [0, 100], [0, 44]); 
  const clockOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const toggleRotate = useTransform(scrollY, [0, 100], [0, 360]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-neutral-600 dark:text-neutral-400 font-jetbrains transition-all duration-300 ease-in-out">
      {/* Status Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 right-0 p-4 flex items-center gap-4 text-sm"
      >
        <motion.div
          style={{
            x: clockX,
            opacity: clockOpacity,
          }}
        >
          <Clock />
        </motion.div>
        <motion.div
          style={{
            rotate: toggleRotate,
          }}
        >
          <ThemeToggle />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <main className="max-w-md mx-auto p-8 ">
        {/* Intro Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-4 mb-10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src="/profile.webp"
              alt="Profile"
              width={96}
              height={96}
              className="rounded-full w-12 h-12"
            />
          </motion.div>
          <div>
            <motion.h1 
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-black dark:text-white mb-1"
            >
              Hi, I am Amith.
            </motion.h1>
            <motion.p 
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="text-gray-500 text-sm dark:text-gray-400"
            >
              Web Developer from Kerala, India
            </motion.p>
          </div>
        </motion.div>

        {/* Currently Section */}
        <motion.section className="mb-6">
          <motion.h2 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="text-sm mb-2 tracking-wider"
          >
            CURRENTLY
          </motion.h2>
          <motion.div 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            whileHover={{ x: 2 }}
            className="flex items-start justify-between group"
          >
            <div>
              <h3 className="text-black text-sm dark:text-white mb-1">Assistant System Eng.</h3>
              <p className="text-xs">2024 - Present</p>
              <motion.button 
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowPreviousRoles(!showPreviousRoles)}
                className="text-xs text-neutral-600 dark:text-neutral-600 mt-2 hover:text-neutral-800 dark:hover:text-neutral-400 transition-colors"
              >
                <motion.span
                  animate={{ rotate: showPreviousRoles ? 90 : 0 }}
                  className="inline-block"
                >
                  ↳
                </motion.span>{" "}
                Previous roles
              </motion.button>
              <motion.div
                animate={showPreviousRoles ? "visible" : "hidden"}
                initial="hidden"
                variants={previousRolesVariants}
                style={{ overflow: "hidden" }}
              >
                <div className="mt-2 pl-4 border-l border-neutral-200 dark:border-neutral-800">
                <motion.div 
  initial={{ opacity: 0, x: -10 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.2 }}
  className="flex justify-between items-start gap-24 group" 
>
  <div>
    <h4 className="text-black dark:text-white mb-2 text-sm">Web Developer</h4> 
    <p className="text-xs text-neutral-600 dark:text-neutral-400">2020 - 2023</p>
  </div>
  <div className="text-right">
    <p className="text-black dark:text-white text-sm mb-2">Freelance</p> 
    <p className="text-xs text-neutral-600 dark:text-neutral-400">Remote</p>
  </div>
</motion.div>

                </div>
              </motion.div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 justify-end mb-1">
                <img
                  src="/tcs.webp"
                  alt="TCS Logo"
                  width={16}
                  height={16}
                  className="object-contain"
                />
                <span className="text-black text-sm dark:text-white">TCS</span>
              </div>
              <p className="text-xs">Kochi</p>
            </div>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section className="mb-6">
          <motion.h2 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="text-sm mb-2 tracking-wider"
          >
            ABOUT
          </motion.h2>
          <motion.p 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            className="text-black  text-sm dark:text-white leading-relaxed text-justify"
          >
            I am a developer from Kerala who enjoys creating practical solutions to real-world problems. I am always looking to improve my skills and explore new technologies.
          </motion.p>
        </motion.section>

        {/* Recent Work Section */}
        <motion.section>
          <motion.h2 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="text-sm mb-2 tracking-wider"
          >
            PROJECTS
          </motion.h2>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
          >
            <ProjectList />
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-sm"
        >
          <div className="flex items-center justify-between">
            <SocialMediaLinks />
          </div>
        </motion.footer>
      </main>
    </div>
  )
}

function SocialMediaLinks() {
  "use client"
  const socialLinks = [
    { icon: <SiGithub className="h-5 w-5" />, label: "GitHub", href: "https://github.com/amith-vp" },
    { icon: <SiX className="h-5 w-5" />, label: "Twitter", href: "https://twitter.com/amithv_" },
    { icon: <SiLinkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/amithvp/" },
    { icon: <SiTelegram className="h-5 w-5" />, label: "Telegram", href: "https://t.me/Am_ith" },
    { icon: <SiReddit className="h-5 w-5" />, label: "Reddit", href: "https://reddit.com/u/amithvp" },
    { icon: <SiDiscord className="h-5 w-5" />, label: "Discord", href: "https://discord.com/users/656840796909076480" },
    { icon: <SiGmail className="h-5 w-5" />, label: "Email", href: "mailto:amithvp002@gmail.com" },
    { icon: <SiBuymeacoffee className="h-5 w-5" />, label: "Buy me a coffee", href: "https://buymeacoffee.com/amithv" },
  ];

  return (
    <div className="flex justify-between w-full">
      {socialLinks.map((link, index) => (
        <motion.div key={index} className="relative group">
          <motion.a
            href={link.href}
            target="_blank"
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white transition-all flex items-center justify-center"
          >
            {link.icon}
          </motion.a>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-neutral-800 dark:bg-neutral-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
            {link.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

