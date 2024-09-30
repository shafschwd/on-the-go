import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { MessageSquare, Phone, Mail } from "lucide-react"

const SupportPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Customer Support</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" type="email" />
              <Textarea placeholder="Your Message" rows={4} />
              <Button>Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-5 w-5 mr-2" /> Phone Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Call us at: +1 (123) 456-7890</p>
              <p className="text-sm text-gray-500">Available 24/7</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2" /> Email Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Email us at: support@onthego.com</p>
              <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" /> Live Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Chat with our support team in real-time</p>
              <Button className="mt-2">Start Chat</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SupportPage;