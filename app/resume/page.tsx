import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Resume() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-8">Resume</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
        <p className="mb-4">
          Experienced full-stack developer with a strong focus on blockchain technology. Skilled in developing
          decentralized applications, smart contracts, and web3 integrations. Passionate about leveraging cutting-edge
          technologies to create innovative solutions.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Blockchain Development (Solidity, Web3.js, Ethereum)</li>
          <li>Full-Stack Web Development (React, Node.js, Express)</li>
          <li>Smart Contract Development and Auditing</li>
          <li>DApp Architecture and Implementation</li>
          <li>RESTful API Design and Development</li>
          <li>Database Management (SQL, NoSQL)</li>
          <li>Version Control (Git)</li>
          <li>Agile Methodologies</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        {/* You can copy the experience items from the Experience page here */}
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div>
          <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
          <p>University Name, Graduation Year</p>
        </div>
      </div>
      <div>
        <Button asChild>
          <Link href="/your-resume.pdf" target="_blank" rel="noopener noreferrer">
            Download Full Resume (PDF)
          </Link>
        </Button>
      </div>
    </div>
  )
}

