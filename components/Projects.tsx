import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"  // Import GitHub icon

const projects = [

  {
    title: "Corporate Governance Voting System",
    description: "Built a DAO-based blockchain voting system on Polygon for secure, transparent corporate governance",
    image: "/Corporate_voting.jpg",
    technologies: ["Solidity", "Truffle", "JavaScript", "Web3.js", "HTML", "CSS", "Polygon"],
    github: "https://github.com/srthkaggrwl/Voting-System-for-Corporate-Governance",
    demo: "https://nft-marketplace-demo.com",
  },

  {
    title: "Animal Detection & Warning System",
    description: "AI-powered highway safety system using thermal sensors, ML, and real-time alerts to reduce animal-road incidents",
    image: "/Animal-detection-warning-system.jpeg",
    technologies: ["Streamlit", "AI", "ML", "Yolov8", "OpenCV", "MQTT", "Micropython"],
    github: "https://github.com/srthkaggrwl/A-Real-Time-IoT-Based-Animal-Detection-and-Warning-System",
    demo: "https://dex-project-demo.com",
  },

  {
    title: "Electronic Health Record Management System",
    description: "Blockchain-based EHR system with IPFS integration, enhancing data security, access control, and record accuracy",
    image: "/EHR.jpg",
    technologies: ["Solidity", "Truffle", "JavaScript", "HTML", "CSS", "IPFS", "Pinata", "Ethereum"],
    github: "https://github.com/srthkaggrwl/EHR_Management_System",
    demo: "https://nft-marketplace-demo.com",
  },

    {
    title: "Media Authentication Platform using Blockchain ",
    description: "A decentralized media authentication and publishing system that leverages blockchain and QR codes to verify content authenticity, prevent misinformation, and detect tampered media.",
    image: "/media_auth.jpeg",
    technologies: ["Solidity", "Truffle", "JavaScript", "HTML", "CSS", "Ethereum"],
    github: "https://github.com/srthkaggrwl/Media_Authentication_System",
    demo: "https://nft-marketplace-demo.com",
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <div className="py-2 scroll-mt-16">
      <h1 id="projects" className="text-4xl font-bold mb-8">My Projects</h1> {/* ID moved here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> {/* Updated grid for 3 columns */}
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardContent className="flex-grow p-0">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">{project.description}</CardDescription>
              </CardHeader>
              <div className="flex flex-wrap gap-2 mb-4 px-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded pl-d">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline" className="flex items-center">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="mr-2" /> {/* GitHub Icon */}
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
  );
}
