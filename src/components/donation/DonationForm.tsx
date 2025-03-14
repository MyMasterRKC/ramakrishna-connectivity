
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Heart } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// PayFast merchant details
const MERCHANT_ID = "10000100"; // Replace with your actual Merchant ID
const MERCHANT_KEY = "46f0cd694581a"; // Replace with your actual Merchant Key
const PAYFAST_URL = "https://sandbox.payfast.co.za/eng/process"; // Use this for testing

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentOption, setPaymentOption] = useState("once");
  
  const handleAmountSelect = (value: string) => {
    setAmount(value);
    setCustomAmount("");
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCustomAmount(value);
      setAmount(value);
    }
  };
  
  // Generate a unique payment ID
  const generatePaymentId = () => {
    return `donation-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || !name || !email) {
      return;
    }
    
    // Create a form to submit to PayFast
    const form = document.createElement("form");
    form.method = "POST";
    form.action = PAYFAST_URL;
    form.target = "_blank";
    
    // Required fields
    const requiredFields = [
      { name: "merchant_id", value: MERCHANT_ID },
      { name: "merchant_key", value: MERCHANT_KEY },
      { name: "return_url", value: window.location.origin + "/donation-success" },
      { name: "cancel_url", value: window.location.origin + "/donation" },
      { name: "notify_url", value: window.location.origin + "/api/payfast-webhook" },
      { name: "name_first", value: name },
      { name: "email_address", value: email },
      { name: "m_payment_id", value: generatePaymentId() },
      { name: "amount", value: amount },
      { name: "item_name", value: "Donation to Ramakrishna Centre" },
      { name: "item_description", value: "Thank you for your generous donation" },
      { name: "subscription_type", value: paymentOption === "monthly" ? "1" : "" }
    ];
    
    // Add fields to form
    requiredFields.forEach(field => {
      if (field.value) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = field.name;
        input.value = field.value;
        form.appendChild(input);
      }
    });
    
    // Add form to body and submit it
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Make a Donation</CardTitle>
        <CardDescription>All donations are securely processed by PayFast</CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
            {/* Donation Frequency */}
            <div>
              <h3 className="text-lg font-medium mb-3">Donation Frequency</h3>
              <RadioGroup
                defaultValue="once"
                className="flex space-x-4"
                value={paymentOption}
                onValueChange={setPaymentOption}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="once" id="once" />
                  <Label htmlFor="once">One-time</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly">Monthly</Label>
                </div>
              </RadioGroup>
            </div>
            
            {/* Amount Options */}
            <div>
              <h3 className="text-lg font-medium mb-3">Select Amount</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                {["100", "250", "500", "1000", "2500", "5000"].map((value) => (
                  <Button
                    key={value}
                    type="button"
                    variant={amount === value ? "default" : "outline"}
                    className="h-14"
                    onClick={() => handleAmountSelect(value)}
                  >
                    R{value}
                  </Button>
                ))}
              </div>
              
              <div className="mt-4">
                <Label htmlFor="custom-amount">Custom Amount (R)</Label>
                <Input
                  id="custom-amount"
                  placeholder="Enter amount"
                  className="mt-1"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                />
              </div>
            </div>
            
            <Separator />
            
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-medium mb-3">Your Information</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    className="mt-1"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="mt-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            
            <Alert variant="info" className="bg-blue-50 text-blue-800 border-blue-200">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Secure Donation</AlertTitle>
              <AlertDescription>
                Your payment will be securely processed by PayFast. You will be redirected to their secure payment page.
              </AlertDescription>
            </Alert>
          </div>
        </form>
      </CardContent>
      
      <CardFooter>
        <Button 
          type="submit" 
          className="w-full bg-orange-600 hover:bg-orange-700"
          onClick={handleSubmit}
          disabled={!amount || !name || !email}
        >
          <Heart className="mr-2 h-4 w-4" />
          Donate R{amount || "0"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DonationForm;
