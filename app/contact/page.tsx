"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission
    console.log("Form submitted:", formData)
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I will get back to you soon.",
    })
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit">Send Message</Button>
        </form>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Connect with me</h2>
          <div className="flex space-x-4 mb-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
          </div>
          <p className="text-muted-foreground">
            Feel free to reach out to me through the contact form or connect with me on social media. I'm always open to
            discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>
      </div>
    </div>
  )
}

