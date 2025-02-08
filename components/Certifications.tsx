import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const repository = "My_Portfolio";
const basePath = process.env.NODE_ENV === "production" ? `/${repository}` : "";

const certifications = [
  {
    name: "The Complete Data Structure & Algorithm Course in Python",
    organization: "Udemy",
    logo: `${basePath}/udemy.png`,
    date: "January 2024",
    verificationLink: "https://www.udemy.com/certificate/UC-4c2d210c-493e-404c-a679-9f7bdbde7cf5/",
  },
  {
    name: "Ethereum Blockchain Developer Bootcamp with Solidity (2024)",
    organization: "Udemy",
    logo: `${basePath}/udemy.png`,
    date: "June 2024",
    verificationLink: "https://www.udemy.com/certificate/UC-6b91600a-a7ca-4b74-8b8c-46394bc6a1b0/",
  },
  {
    name: "Blockchain A-Z: Build A Blockchain, a Crypto + ChatGPT Prize",
    organization: "Udemy",
    logo: `${basePath}/udemy.png`,
    date: "April 2024",
    verificationLink: "https://www.udemy.com/certificate/UC-6b91600a-a7ca-4b74-8b8c-46394bc6a1b0/",
  },
  {
    name: "Innovation Business Models and Entrepreneurship",
    organization: "NPTEL, IIT Roorkee",
    logo: `${basePath}/nptel.png`,
    date: "November 2023",
    verificationLink: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23MG116S73050082820355763",
  },
  {
    name: "CS120: Bitcoin for Developers I  ",
    organization: "Saylor Academy",
    logo: `${basePath}/Saylor.png`,
    date: "April 2023",
    verificationLink: "https://learn.saylor.org/admin/tool/certificate/index.php?code=2849519768SA",
  },
  {
    name: "NPTEL - Blockchain and its applications",
    organization: "NPTEL, IIT Kharagpur",
    logo: `${basePath}/nptel.png`,
    date: "April 2022",
    verificationLink: "https://drive.google.com/file/d/1ead92xzMAM8GLPTDjbhBIun3i_HO1dRQ/view",
  }
];

export default function Certifications() {
  return (
    <div id="Certifications" className="py-10">
      <h1 className="text-4xl font-bold mb-8">Certifications</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {certifications.map((cert, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition flex flex-col justify-between h-full p-4 ">
            <CardHeader className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={cert.logo || "/placeholder.svg"}
                  alt={cert.organization}
                  width={60} // Increased from 40 to 60
                  height={60} // Increased from 40 to 60
                  className="rounded"
                />
                <div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{cert.organization}</CardDescription>
                  <p className="text-xs text-muted-foreground">{cert.date}</p>
                </div>
              </div>
            </CardHeader>
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
  );
}
