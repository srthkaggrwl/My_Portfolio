import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const repository = "My_Portfolio";
const basePath = process.env.NODE_ENV === "production" ? `/${repository}` : "";

const skills = [
  { name: "Solidity", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "HTML", level: 80 },
  { name: "CSS", level: 75 },
];

const techStack = [
  { name: "HTML", logo: `${basePath}/html-logo.svg` },
  { name: "CSS", logo: `${basePath}/css-logo.svg` },
  { name: "React", logo: `${basePath}/react_logo.svg` },
  { name: "Node.js", logo: `${basePath}/nodejs-logo.svg` },
  { name: "TypeScript", logo: `${basePath}/typescript-logo.svg` },
  { name: "NextJS", logo: `${basePath}/nextjs.svg` },
  { name: "JavaScript", logo: `${basePath}/javascript-logo.svg` },
  { name: "Solidity", logo: `${basePath}/solidity-logo.svg` },
  { name: "Python", logo: `${basePath}/python-logo.svg` },
];

export default function Home() {
  return (
    <div id="home" className="flex flex-col items-center justify-center min-h-screen py-2 scroll-mt-16 py-8">
      <Image src={`${basePath}/Profile_pic.jpg`} alt="Your Name" width={200} height={200} className="rounded-full mb-8" />
      <h1 className="text-4xl font-bold mb-2">Hi, I'm Sarthak</h1>
      <h2 className="text-2xl mb-4">Full-stack Developer & Blockchain Enthusiast</h2>
      <p className="text-center max-w-xl mb-8">
        Welcome to my portfolio! I'm passionate about building innovative solutions using cutting-edge technologies.
        With expertise in blockchain, full-stack development, and a keen eye for user experience, I strive to create
        impactful and efficient applications.
      </p>
      <div className="flex space-x-4 mb-8">
        <Button asChild>
          <Link href={`${basePath}/Resume.pdf`} target="_blank" rel="noopener noreferrer">
            Resume
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={`${basePath}/contact`}>Get in Touch</Link>
        </Button>
      </div>

      {/* About Section */}
      <div id="about" className="py-12 w-full scroll-mt-16">
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

      {/* Other Sections */}
      <div id="projects" className="py-12 w-full scroll-mt-10">
        <Projects />
      </div>
      <div id="education" className="py-12 w-full scroll-mt-1">
        <Education />
      </div>
      <div id="experience" className="py-12 w-full scroll-mt-2">
        <Experience />
      </div>
      <div id="certifications" className="py-12 w-full scroll-mt-5">
        <Certifications />
      </div>
      <div id="contact" className="scroll-mt-20 w-full py-12">
        <Contact />
      </div>
    </div>
  );
}
