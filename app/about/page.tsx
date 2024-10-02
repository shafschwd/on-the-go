import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Package, Truck, Clock, Users } from "lucide-react"

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About On-The-Go</h1>
      <div className="space-y-8">
        <section>
          <p className="text-lg mb-4">
            On-The-Go is a leading delivery service provider, committed to connecting businesses and individuals with fast, reliable, and efficient delivery solutions. Founded in 2024, we've quickly grown to become a trusted name in the logistics industry.
          </p>
          <p className="text-lg mb-4">
            Our mission is to revolutionize the delivery experience by leveraging cutting-edge technology and a dedicated team of professionals. We strive to make every delivery seamless, trackable, and tailored to our customers' needs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" /> Punctuality
                </CardTitle>
              </CardHeader>
              <CardContent>
                We understand the importance of timely deliveries and strive to meet or exceed delivery expectations.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="mr-2 h-5 w-5" /> Reliability
                </CardTitle>
              </CardHeader>
              <CardContent>
                Our customers can count on us for consistent, dependable service, every time they choose On-The-Go.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="mr-2 h-5 w-5" /> Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                We continuously invest in technology to improve our services and provide cutting-edge solutions.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" /> Customer-Centric
                </CardTitle>
              </CardHeader>
              <CardContent>
                Our customers are at the heart of everything we do. We're committed to providing exceptional service and support.
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-lg mb-4">
            Behind On-The-Go is a diverse team of logistics experts, tech innovators, and customer service professionals. Our combined expertise allows us to tackle the complex challenges of modern delivery services and provide unparalleled solutions to our clients.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Join Us on Our Journey</h2>
          <p className="text-lg">
            As we continue to grow and expand our services, we invite you to be a part of our journey. Whether you're a business looking for reliable delivery solutions or an individual in need of quick and efficient deliveries, On-The-Go is here to serve you.
          </p>
        </section>
      </div>
    </div>
  )
}

// Export the component as the default export
export default AboutPage;