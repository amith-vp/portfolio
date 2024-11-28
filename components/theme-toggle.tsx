"use client"

import { FaSun, FaMoon } from 'react-icons/fa6'
import { toggleTheme } from "@/lib/utils"
import { useEffect } from 'react'

const ICON_SIZE = "1.8rem"

export function ThemeToggle() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <button
      onClick={toggleTheme}
      className="relative w-8 h-8 flex items-center justify-center rounded-full hover:opacity-80 bg-neutral-200 dark:bg-neutral-800"
    >
      <FaMoon className={`absolute h-[${ICON_SIZE}] w-[${ICON_SIZE}] transition-opacity opacity-100 dark:opacity-0`} />
      <FaSun className={`absolute h-[${ICON_SIZE}] w-[${ICON_SIZE}] transition-opacity opacity-0 dark:opacity-100`} />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

