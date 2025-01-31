import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import { ThemeProvider } from "./components/ThemeProvider"
import Footer from "./components/Footer"
import { Toaster } from "@/components/ui/toaster"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Your Name - Portfolio",
  description: "Full-stack Developer & Blockchain Enthusiast",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <Navbar />
            <main className="flex-1">
              <div className="container mx-auto px-4 py-10">{children}</div>
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

