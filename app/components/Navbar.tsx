"use client"

import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="container flex justify-end py-2">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle theme"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </nav>
  )
}

