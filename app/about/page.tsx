import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

const skills = [
  { name: "Solidity", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "HTML", level: 80 },
  { name: "CSS", level: 75 },
]

const techStack = [
  { name: "HTML", logo: "/html-logo.svg" },
  { name: "CSS", logo: "/css-logo.svg" },
  { name: "React", logo: "/react_logo.svg" },
  { name: "Node.js", logo: "/nodejs-logo.svg" },
  { name: "Solidity", logo: "/solidity-logo.svg" },
  { name: "Python", logo: "/python-logo.svg" },
  { name: "TypeScript", logo: "/typescript-logo.svg" },
  { name: "JavaScript", logo: "/javascript-logo.svg" },
]

export default function About() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Professional Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            I am a passionate full-stack developer with a strong focus on blockchain technology. With extensive
            experience in building decentralized applications and web platforms, I bring a unique blend of technical
            expertise and creative problem-solving to every project. My goal is to leverage cutting-edge technologies to
            create innovative solutions that drive the future of web development and decentralized systems.
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="w-full" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Tech Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center">
                <Image src={tech.logo || "/placeholder.svg"} alt={tech.name} width={64} height={64} />
                <span className="mt-2 text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

