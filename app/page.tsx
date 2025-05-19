import Head from "next/head"
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
  { name: "MongoDB", logo: `${basePath}/mongodb.svg` },
  { name: "React", logo: `${basePath}/react_logo.svg` },
  { name: "Node.js", logo: `${basePath}/nodejs-logo.svg` },
  { name: "TypeScript", logo: `${basePath}/typescript-logo.svg` },
  { name: "NextJS", logo: `${basePath}/nextjs.svg` },
  { name: "JavaScript", logo: `${basePath}/javascript-logo.svg` },
  { name: "Solidity", logo: `${basePath}/solidity-logo.svg` },
  { name: "Python", logo: `${basePath}/python-logo.svg` },
];

const toolsStack = [
  { name: "Git", logo: `${basePath}/git.svg` },
  { name: "Postman", logo: `${basePath}/postman.svg` },
  { name: "Digital Ocean", logo: `${basePath}/digitalocean.svg` },
  { name: "VScode", logo: `${basePath}/VScode.svg` },
  { name: "Truffle", logo: `${basePath}/truffle.png` },
  { name: "Confluence", logo: `${basePath}/confluence.svg` },
  { name: "IPFS", logo: `${basePath}/ipfs.svg` },
  { name: "Ethereum", logo: `${basePath}/ethereum.svg` },
  { name: "Docker", logo: `${basePath}/docker.svg` },
  { name: "Ubuntu", logo: `${basePath}/ubuntu.svg` },
];

export default function Home() {
  return (
    <div id="home" className="flex flex-col items-center justify-center min-h-screen py-2 px-4 sm:px-8 scroll-mt-16 py-8">
      <Image src={`${basePath}/Profile_pic.jpg`} alt="Your Name" width={200} height={200} className="rounded-full mb-8 w-32 sm:w-48" />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Hi, I'm Sarthak</h1>
      <h2 className="text-xl sm:text-2xl mb-4 text-center">Full-stack Developer & Blockchain Enthusiast</h2>
      <p className="text-center max-w-xl mb-8 text-sm sm:text-base">
        Welcome to my portfolio! I'm passionate about building innovative solutions using cutting-edge technologies.
        With expertise in blockchain, full-stack development, 
        I value collaboration and am dedicated to delivering solutions that are impactful and align 
        with the organization's strategic vision.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        <Button asChild>
          <Link href="https://drive.google.com/file/d/1Hs6pttxitEhvd4L61ycrmgZG_V1jLf1Q/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Resume
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="#contact">Get in Touch</Link>
        </Button>
      </div>

      <div id="about" className="py-12 w-full scroll-mt-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base">
              Currently a final-year student at VIT, Vellore campus, pursuing a B.Tech in Computer Engineering with a specialization in Blockchain Technology, I combine academic knowledge with hands-on experience in full-stack and blockchain development. I have a strong foundation in JavaScript, TypeScript, Solidity, and Python, with expertise in React.js, Next.js, Node.js, and smart contract development. Passionate about decentralized systems, Web3, and scalable applications, I enjoy building innovative solutions that enhance security, transparency, and efficiency.
            </p>
            <br />
            <p className="text-sm sm:text-base">
              As a Research Intern at ISRO’s Space Applications Centre, I improved traceability by 50% using a private blockchain prototype, demonstrating my ability to develop secure and efficient systems. At Flexflier, I leverage my Web3 and blockchain architecture skills to create scalable solutions. Driven by a problem-solving mindset and a passion for emerging technologies, I am committed to contributing to the future of decentralized applications and full-stack development.
            </p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tech Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center">
                  <Image src={tech.logo || "/placeholder.svg"} alt={tech.name} width={48} height={48} className="sm:w-16 sm:h-16" />
                  <span className="mt-2 text-xs sm:text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Software and Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4">
              {toolsStack.map((tool) => (
                <div key={tool.name} className="flex flex-col items-center">
                  <Image src={tool.logo || "/placeholder.svg"} alt={tool.name} width={48} height={48} className="sm:w-16 sm:h-16" />
                  <span className="mt-2 text-xs sm:text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

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
