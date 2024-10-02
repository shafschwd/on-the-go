import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"

export const TOSPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <Card>
        <CardHeader>
          <CardTitle>On-The-Go Delivery Service Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Welcome to On-The-Go. By using our services, you agree to comply with and be bound by the following terms and conditions. Please read these carefully.
          </p>
          
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the On-The-Go service, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our service.
          </p>
          
          <h2 className="text-xl font-semibold">2. Use of Service</h2>
          <p>
            You may use On-The-Go to request and schedule delivery services. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
          </p>
          
          <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
          <p>
            You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.
          </p>
          
          <h2 className="text-xl font-semibold">4. Payment</h2>
          <p>
            You agree to pay all fees or charges to your account based on On-The-Go's fees, charges, and billing terms in effect at the time a fee or charge is due and payable.
          </p>
          
          <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
          <p>
            On-The-Go shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>
          
          <h2 className="text-xl font-semibold">6. Changes to Terms</h2>
          <p>
            On-The-Go reserves the right, at its sole discretion, to modify or replace these Terms at any time. It is your responsibility to check these Terms periodically for changes.
          </p>
          
          <h2 className="text-xl font-semibold">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at legal@onthego.com.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default TOSPage