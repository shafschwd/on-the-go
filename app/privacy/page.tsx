import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <Card>
        <CardHeader>
          <CardTitle>On-The-Go Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            At On-The-Go, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines our practices concerning the collection, use, and disclosure of your data.
          </p>
          
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, request a delivery, or contact customer support. This may include your name, email address, phone number, and delivery addresses.
          </p>
          
          <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, to process and complete transactions, and to communicate with you about our services, promotions, and policies.
          </p>
          
          <h2 className="text-xl font-semibold">3. Information Sharing and Disclosure</h2>
          <p>
            We may share your information with third-party service providers who perform services on our behalf, such as payment processing and data analysis. We do not sell your personal information to third parties.
          </p>
          
          <h2 className="text-xl font-semibold">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
          
          <h2 className="text-xl font-semibold">5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data. To exercise these rights, please contact us at privacy@onthego.com.
          </p>
          
          <h2 className="text-xl font-semibold">6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          
          <h2 className="text-xl font-semibold">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@onthego.com.
          </p>
          
          <p className="text-sm text-gray-500">Last Updated: October 1, 2024</p>
        </CardContent>
      </Card>
    </div>
  )
}