import { Button } from "@/app/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { CreditCard, Download } from "lucide-react"

const invoices = [
  { id: "INV001", date: "2023-05-15", amount: "$25.99", status: "Paid" },
  { id: "INV002", date: "2023-05-16", amount: "$34.50", status: "Pending" },
  { id: "INV003", date: "2023-05-17", amount: "$18.75", status: "Paid" },
]

const PaymentPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Payments & Invoices</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$79.24</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$34.50</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <CreditCard className="h-6 w-6 mr-2" />
              <span>Visa ending in 1234</span>
            </div>
            <Button variant="outline" size="sm" className="mt-2">
              Update Payment Method
            </Button>
          </CardContent>
        </Card>
      </div>
      <h2 className="text-2xl font-bold mb-4">Recent Invoices</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.id}</TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>{invoice.amount}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-1" /> Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default PaymentPage;