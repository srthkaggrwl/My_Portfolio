import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const experiences = [
  {
    company: "Flexflier",
    location: "California, USA",
    logo: "/flexflier-logo.png",
    position: "Blockchain Developer",
    duration: "Sept 2024 - Present | Remote",
    website: "https://flexflier.com/",
    responsibilities: [
      "Developed a smart contract for ticket booking",
      "Proposed blockchain-driven loyalty program automation",
      "Enhanced data integrity using IPFS",
      "Launched a crypto & fiat ticket payment platform",
    ],
  },
  {
    company: "Space Application Center, ISRO",
    location: "Ahmedabad, India",
    logo: "/Indian_Space_Research_Organisation_Logo.svg.png",
    position: "Research Intern",
    duration: "Sept 2023 - Nov 2023 | On-site",
    website: "https://www.sac.gov.in/",
    responsibilities: [
      "Analyzed permissioned blockchain networks like Hyperledger Fabric",
      "Designed a prototype private blockchain for Data Access control",
      "Improved traceability and security of sensitive data by 50%",
    ],
  },
  // Add more experiences as needed
]

export default function Experience() {
  return (
    <div id = "Experience" className="py-12 scroll-mt-16">
      <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Link href={exp.website} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={exp.logo || "/placeholder.svg"}
                    alt={exp.company}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </Link>
                <div>
                  <Link href={exp.website} target="_blank" rel="noopener noreferrer">
                    <CardTitle>{exp.position}</CardTitle>
                  </Link>
                  <CardDescription>{exp.company}</CardDescription>
                  <p className="text-xs text-muted-foreground">{exp.location}</p>
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
