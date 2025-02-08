import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const repository = "My_Portfolio";
const basePath = process.env.NODE_ENV === "production" ? `/${repository}` : "";

const experiences = [
  {
    company: "Flexflier",
    location: "California, USA",
    logo: `${basePath}/flexflier-logo.png`,
    position: "Blockchain Developer",
    duration: "Sept 2024 - Jan 2025 | Remote",
    website: "https://flexflier.com/",
    responsibilities: [
      "Developed a PoC for a blockchain-based ticket booking system, enhancing security and reducing validation time.",
      "Optimized corporate travel expense management, including airfare, accommodation, and transportation.",
      "Recommended multi-currency blockchain solutions, streamlining cross-border transactions and ensuring compliance.",
    ],
  },
  {
    company: "Space Application Center, ISRO",
    location: "Ahmedabad, India",
    logo: `${basePath}/Indian_Space_Research_Organisation_Logo.svg.png`,
    position: "Research Intern",
    duration: "Sept 2023 - Nov 2023 | On-site",
    website: "https://www.sac.gov.in/",
    responsibilities: [
      "Analyzed permissioned blockchain networks, identifying key use cases to improve efficiency by 40%.",
      "Designed a Hyperledger Fabric prototype, enhancing access control, security, and traceability by 50%.",
      "Explored blockchain applications for safeguarding sensitive data.",
    ],
  },
  // Add more experiences as needed
]

export default function Experience() {
  return (
    <div id="Experience" className="py-12 scroll-mt-16">
      <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {experiences.map((exp, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition h-full">
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
  );
}
