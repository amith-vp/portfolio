
"use client"

import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0a0a0a] text-neutral-600 dark:text-neutral-400">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <a className="text-blue-500 hover:underline">Go back home</a>
      </Link>
    </div>
  )
}