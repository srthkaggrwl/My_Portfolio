import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const certifications = [
  {
    name: "The Complete Data Structure & Algorithm Course in Python",
    organization: "Udemy",
    date: "January 2024",
    image: "/udemy.png",
    verificationLink: "https://www.udemy.com/certificate/UC-4c2d210c-493e-404c-a679-9f7bdbde7cf5/",
  },
  {
    name: "Ethereum Blockchain Developer Bootcamp with Solidity (2024)",
    organization: "Udemy",
    date: "June 2024",
    image: "/udemy.png",
    verificationLink: "https://www.udemy.com/certificate/UC-6b91600a-a7ca-4b74-8b8c-46394bc6a1b0/",
  },
  {
    name: "Blockchain A-Z: Build A Blockchain, A Crypto",
    organization: "Udemy",
    date: "April 2024",
    image: "/udemy.png",
    verificationLink: "https://www.udemy.com/certificate/UC-6b91600a-a7ca-4b74-8b8c-46394bc6a1b0/",
  },
  {
    name: "Innovation Business Models and Entrepreneurship",
    organization: "NPTEL, IIT Roorkee",
    date: "November 2023",
    image: "/nptel.png",
    verificationLink: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23MG116S73050082820355763",
  },
  {
    name: "Bitcoin for Developers I",
    organization: "Saylor Academy",
    date: "April 2023",
    image: "/Saylor.png",
    verificationLink: "https://learn.saylor.org/admin/tool/certificate/index.php?code=2849519768SA",
  },
  {
    name: "NPTEL - Blockchain and its applications",
    organization: "NPTEL, IIT Kharagpur",
    date: "April 2022",
    image: "/nptel.png",
    verificationLink: "https://drive.google.com/file/d/1ead92xzMAM8GLPTDjbhBIun3i_HO1dRQ/view",
  }
];

export default function Certifications() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-8">Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <Card key={index} className="flex flex-col justify-between h-full">
            <CardHeader>
              <CardTitle>{cert.name}</CardTitle>
              <CardDescription>{cert.organization}</CardDescription>
              <p className="text-sm text-muted-foreground">{cert.date}</p>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Image
                src={cert.image || "/placeholder.svg"}
                alt={cert.name}
                width={300}
                height={200}
                className="w-full h-48 object-contain mb-4"
              />
            </CardContent>
            <CardFooter className="flex justify-end p-4">
              <Button asChild>
                <Link href={cert.verificationLink} target="_blank" rel="noopener noreferrer">
                  Verify Certificate
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
