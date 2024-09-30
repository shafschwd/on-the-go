import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
import { ArrowRight, Package, Truck, Clock, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Fast and Reliable Delivery with On-The-Go</h1>
        <p className="text-xl text-gray-600 mb-8">Get your packages delivered quickly and securely, anytime, anywhere</p>
        <Button size="lg" className="text-lg">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="text-center">
          <Package className="mx-auto h-16 w-16 text-primary mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Easy Booking</h3>
          <p className="text-gray-600">Book your delivery in just a few taps with our user-friendly interface</p>
        </div>
        <div className="text-center">
          <Truck className="mx-auto h-16 w-16 text-primary mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Real-time Tracking</h3>
          <p className="text-gray-600">Track your package every step of the way with our advanced GPS system</p>
        </div>
        <div className="text-center">
          <Clock className="mx-auto h-16 w-16 text-primary mb-4" />
          <h3 className="text-2xl font-semibold mb-3">On-time Delivery</h3>
          <p className="text-gray-600">We prioritize punctuality in all our deliveries, ensuring your packages arrive on schedule</p>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">How On-The-Go Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: 1, title: "Book", description: "Choose your delivery options and schedule" },
            { step: 2, title: "Pack", description: "Prepare your package for pickup" },
            { step: 3, title: "Track", description: "Monitor your delivery in real-time" },
            { step: 4, title: "Receive", description: "Your package arrives at its destination" }
          ].map((item) => (
            <div key={item.step} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 rounded-lg p-8 mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose On-The-Go?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Fastest delivery in the industry",
            "24/7 customer support",
            "Secure package handling",
            "Competitive pricing",
            "Eco-friendly delivery options",
            "Flexible scheduling"
          ].map((feature, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="h-6 w-6 text-primary mr-3" />
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">Ready to go with On-The-Go?</h2>
        <p className="text-xl text-gray-600 mb-8">Join thousands of satisfied customers who trust On-The-Go for their deliveries</p>
        <div className="flex justify-center gap-4">
          <Link href="/signup" passHref>
            <Button size="lg" className="text-lg">
              Sign Up Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/pricing" passHref>
            <Button size="lg" variant="outline" className="text-lg">
              View Pricing
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}