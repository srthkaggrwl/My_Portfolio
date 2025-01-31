import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const certifications = [
  {
    name: "Certified Blockchain Developer",
    organization: "Blockchain Council",
    date: "June 2022",
    image: "/blockchain-cert.png",
    verificationLink: "https://example.com/verify/blockchain-cert",
  },
  {
    name: "Advanced React and Redux",
    organization: "Udemy",
    date: "March 2021",
    image: "/react-redux-cert.png",
    verificationLink: "https://example.com/verify/react-redux-cert",
  },
  // Add more certifications as needed
]

export default function Certifications() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-8">Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{cert.name}</CardTitle>
              <CardDescription>{cert.organization}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={cert.image || "/placeholder.svg"}
                alt={cert.name}
                width={300}
                height={200}
                className="w-full h-48 object-contain mb-4"
              />
              <p className="text-sm text-muted-foreground">Issued: {cert.date}</p>
            </CardContent>
            <CardFooter>
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

