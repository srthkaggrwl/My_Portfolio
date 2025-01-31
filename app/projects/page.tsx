import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Decentralized Exchange",
    description: "A fully functional DEX built on Ethereum using Solidity and React.",
    image: "/dex-project.jpg",
    technologies: ["Solidity", "React", "Web3.js", "Ethereum"],
    github: "https://github.com/yourusername/dex-project",
    demo: "https://dex-project-demo.com",
  },
  {
    title: "NFT Marketplace",
    description: "An NFT marketplace allowing users to mint, buy, and sell unique digital assets.",
    image: "/nft-marketplace.jpg",
    technologies: ["Next.js", "IPFS", "Solidity", "OpenSea API"],
    github: "https://github.com/yourusername/nft-marketplace",
    demo: "https://nft-marketplace-demo.com",
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-primary/10 text-primary text-sm px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              </Button>
              <Button asChild>
                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

