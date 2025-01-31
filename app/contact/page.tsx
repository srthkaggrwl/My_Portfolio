"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Github, Linkedin, Mail } from "lucide-react"
import emailjs from 'emailjs-com'  // Import EmailJS

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

    try {
      const response = await emailjs.send(
        'service_yh38fkm',  // Your EmailJS service ID
        'template_1wwdpr9',  // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'NU5Tuh5PO3048vPuk'  // Your EmailJS user ID
      )
      console.log("Message sent successfully:", response)
      alert("Message Sent!");
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I will get back to you soon.",
        variant: "default",  // Changed variant type to default
      })
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",  // Added variant type for error messages
      })
    }

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
              <a href="https://github.com/srthkaggrwl" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/srthkaggarwal" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:sarthakaggarwal120@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Mail</span>
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
