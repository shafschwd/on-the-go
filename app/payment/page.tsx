"use client";

import { useState, useEffect } from "react";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import { CreditCard, Building, Wallet } from "lucide-react";

// Load Stripe with the publishable key from the environment
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Card payment form
function CardPaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [cardholderName, setCardholderName] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
        payment_method_data: {
          billing_details: {
            name: cardholderName,
          },
        },
      },
    });

    if (result.error) {
      setError(result.error.message ?? "An unknown error occurred");
      setProcessing(false);
    } else {
      setSucceeded(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="cardholderName">Cardholder Name</Label>
        <Input
          id="cardholderName"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          placeholder="John Doe"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="cardElement">Card Information</Label>
        <CardElement
          id="cardElement"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {succeeded && <div className="text-green-500 text-sm">Payment successful!</div>}
      <Button disabled={!stripe || processing} className="w-full">
        {processing ? "Processing..." : "Pay Now (MYR)"}
      </Button>
    </form>
  );
}

// Bank transfer form
function BankTransferForm() {
  return (
    <div className="space-y-4">
      <p>Please transfer the amount to the following bank account:</p>
      <div>
        <p>Bank: Example Bank Malaysia</p>
        <p>Account Name: On-The-Go Delivery</p>
        <p>Account Number: 1234567890</p>
        <p>Reference: Your Order Number</p>
      </div>
      <Button className="w-full">Confirm Bank Transfer</Button>
    </div>
  );
}

// E-wallet form
function EWalletForm() {
  return (
    <div className="space-y-4">
      <p>Choose your e-wallet provider:</p>
      <RadioGroup defaultValue="touch-n-go">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="touch-n-go" id="touch-n-go" />
          <Label htmlFor="touch-n-go">Touch 'n Go eWallet</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="boost" id="boost" />
          <Label htmlFor="boost">Boost</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="grabpay" id="grabpay" />
          <Label htmlFor="grabpay">GrabPay</Label>
        </div>
      </RadioGroup>
      <Button className="w-full">Pay with E-Wallet</Button>
    </div>
  );
}

// Main page component
const PaymentPage = () => {
  const [clientSecret, setClientSecret] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank" | "ewallet">("card");

  useEffect(() => {
    // Fetch the client secret from your server
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 3500, currency: "myr" }), // Amount in cents, currency in MYR
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Complete Your Payment</h1>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Payment Details</CardTitle>
          <CardDescription>Choose your preferred payment method</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            defaultValue="card"
            className="grid grid-cols-3 gap-4 mb-6"
            onValueChange={(value) => setPaymentMethod(value as "card" | "bank" | "ewallet")}
          >
            <div>
              <RadioGroupItem value="card" id="card" className="peer sr-only" />
              <Label
                htmlFor="card"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <CreditCard className="mb-3 h-6 w-6" />
                Card
              </Label>
            </div>
            <div>
              <RadioGroupItem value="bank" id="bank" className="peer sr-only" />
              <Label
                htmlFor="bank"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Building className="mb-3 h-6 w-6" />
                Bank
              </Label>
            </div>
            <div>
              <RadioGroupItem value="ewallet" id="ewallet" className="peer sr-only" />
              <Label
                htmlFor="ewallet"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Wallet className="mb-3 h-6 w-6" />
                E-Wallet
              </Label>
            </div>
          </RadioGroup>

          {paymentMethod === "card" && clientSecret && (
            <Elements stripe={stripePromise} options={options}>
              <CardPaymentForm />
            </Elements>
          )}
          {paymentMethod === "bank" && <BankTransferForm />}
          {paymentMethod === "ewallet" && <EWalletForm />}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center">
            All payments are processed in Malaysian Ringgit (MYR).
            Your payment is secure and encrypted.
          </div>
          {paymentMethod === "card" && (
            <Button className="w-full">Pay with Card</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

// Export the PaymentPage component as the default export
export default PaymentPage;
