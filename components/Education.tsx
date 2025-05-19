"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const repository = "My_Portfolio";
const basePath = process.env.NODE_ENV === "production" ? `/${repository}` : "";

const education = [
  {
    institution: "Vellore Institute of Technology",
    location: "Vellore, Tamil Nadu, India",
    logo:  `${basePath}/vit.png`,
    degree: "B.Tech, Computer Engineering",
    duration: "2021 - 2025",
    grade: "8.87/10",
    activities: [
      {
        title: "Sergeant - National Cadet Corps (Army Wing)",
        duration: "Jan 2023 - Feb 2024",
        logo:  `${basePath}/ncc.png`,
        description:
          "Led 150 cadets as a Drill Instructor, honing leadership, discipline, and project management skills. Earned the prestigious 'C' Certificate.",
      },
      {
        title: "Core Committee Member - InnovatorsQuest",
        duration: "Mar 2022 - Apr 2023",
        logo:  `${basePath}/iquest.jpeg`,
        description:
          "Gained valuable knowledge through competitions and activities. Guided and mentored juniors in technical pursuits.",
      },
      {
        title: "MUN Delegate - DISEC",
        duration: "Apr 2023",
        logo:  `${basePath}/mun.jpeg`,
        description:
          "Represented Austria in DISEC at Model United Nations, addressing maritime security and economic cooperation.",
      },
    ],
  },
  {
    institution: "St. Francis de Sales Senior Secondary School",
    location: "Janakpuri, New Delhi, India",
    logo:  `${basePath}/sfs.png`,
    degree: "Higher Secondary",
    duration: "2009 - 2021",
    grade: "96.4%",
    activities: [
      {
        title: "Sports Captain",
        duration: "Apr 2019 - Apr 2020",
        description:
          "Organized interschool competitions and led the school's marching contingent during Sports Day.",
      },
  
      {
        title: "Food Collection & Distribution Coordinator",
        duration: "Apr 2018 - Mar 2021",
        description:
          "Managed food collection and distribution to NGOs, ensuring systematic delivery to underprivileged areas.",
      },
      {
        title: "Asst. Prefect",
        duration: "Apr 2018 - Mar 2019",
        description:
          "As head of Pope Paul House, I led the house to victory in academics and extracurriculars, securing annual prizes in both categories.",
      },    

      {
        title: "Road Safety Club Coordinator",
        duration: "Apr 2018 - Mar 2021",
        description:
          "Led awareness campaigns and participated in debates to promote road safety initiatives within the school.",
      },
    ],
  },
];

export default function Education() {
  return (
    <div id = "Education" className="py-12 scroll-mt-1">
      <h1 className="text-4xl font-bold mb-8 ">Education</h1>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Image src={edu.logo} alt={edu.institution} width={64} height={64} className="rounded-full" />
                <div>
                  <CardTitle>{edu.degree}</CardTitle>
                  <CardDescription>{edu.institution}</CardDescription>
                  <p className="text-xs text-muted-foreground">{edu.location}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 font-semibold">
                {edu.duration} | <span className="bg-gray-200 px-2 py-1 rounded text-gray-700">Grade: {edu.grade}</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {edu.activities.map((activity, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    {"logo" in activity && (
                      <Image src={activity.logo} alt={activity.title} width={40} height={40} className="rounded-md" />
                    )}
                    <div>
                      <strong>{activity.title}</strong>
                      <p className="text-xs text-gray-500">{activity.duration}</p>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
