"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table";
import { Download } from "lucide-react";

// Mock data for invoice details
const invoiceData = {
  id: "INV001",
  orderId: "ORD001",
  customer: {
    name: "John Doe",
    address: "123 Main St, City, Country",
    email: "john@example.com",
  },
  items: [
    { id: 1, description: "Item 1", quantity: 2, price: 10.99 },
    { id: 2, description: "Item 2", quantity: 1, price: 24.99 },
  ],
  total: 46.97,
  date: "2023-06-01",
  dueDate: "2023-06-15",
};

const InvoicePage = ({ params }: { params: { orderId: string } }) => {
  const router = useRouter();
  const [invoice, setInvoice] = useState(invoiceData);

  useEffect(() => {
    // Simulate fetching invoice data based on orderId
    setInvoice((prevInvoice) => ({ ...prevInvoice, orderId: params.orderId }));
  }, [params.orderId]);

  const handleDownloadInvoice = () => {
    // In a real application, this would trigger a download (e.g., PDF generation)
    console.log("Downloading invoice:", invoice.id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" onClick={() => router.back()} className="mb-4">
        Back to Admin Dashboard
      </Button>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Invoice #{invoice.id}</span>
            <Button onClick={handleDownloadInvoice}>
              <Download className="h-4 w-4 mr-2" /> Download Invoice
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-semibold">Bill To:</h3>
              <p>{invoice.customer.name}</p>
              <p>{invoice.customer.address}</p>
              <p>{invoice.customer.email}</p>
            </div>
            <div className="text-right">
              <p><span className="font-semibold">Invoice Date:</span> {invoice.date}</p>
              <p><span className="font-semibold">Due Date:</span> {invoice.dueDate}</p>
              <p><span className="font-semibold">Order ID:</span> {invoice.orderId}</p>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Unit Price</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoice.items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>RM {item.price.toFixed(2)}</TableCell>
                  <TableCell>RM {(item.quantity * item.price).toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-6 text-right">
            <p className="text-lg font-semibold">Total: RM {invoice.total.toFixed(2)}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Ensure default export for Next.js page
export default InvoicePage;
