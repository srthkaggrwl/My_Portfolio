import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const experiences = [
  {
    company: "Blockchain Innovations Inc.",
    logo: "/blockchain-innovations-logo.png",
    position: "Senior Blockchain Developer",
    duration: "Jan 2021 - Present",
    responsibilities: [
      "Lead development of smart contracts for DeFi projects",
      "Architected and implemented scalable blockchain solutions",
      "Mentored junior developers in blockchain technologies",
    ],
  },
  {
    company: "Web3 Solutions LLC",
    logo: "/web3-solutions-logo.png",
    position: "Full Stack Developer",
    duration: "Mar 2019 - Dec 2020",
    responsibilities: [
      "Developed and maintained decentralized applications",
      "Integrated Web3 technologies with traditional web stacks",
      "Optimized gas usage in smart contracts",
    ],
  },
  // Add more experiences as needed
]

export default function Experience() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Image
                  src={exp.logo || "/placeholder.svg"}
                  alt={exp.company}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <CardTitle>{exp.position}</CardTitle>
                  <CardDescription>{exp.company}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
              <ul className="list-disc pl-5 space-y-1">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

