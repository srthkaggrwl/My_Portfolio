import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image src="Profile_pic.jpg" alt="Your Name" width={200} height={200} className="rounded-full mb-8" />
      <h1 className="text-4xl font-bold mb-2">Hi, I'm Sarthak</h1>
      <h2 className="text-2xl mb-4">Full-stack Developer & Blockchain Enthusiast</h2>
      <p className="text-center max-w-xl mb-8">
        Welcome to my portfolio! I'm passionate about building innovative solutions using cutting-edge technologies.
        With expertise in blockchain, full-stack development, and a keen eye for user experience, I strive to create
        impactful and efficient applications.
      </p>
      <div className="flex space-x-4">
        <Button asChild>
          <Link href="/about">Learn More</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  )
}

