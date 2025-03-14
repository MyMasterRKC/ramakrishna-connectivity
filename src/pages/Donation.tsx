
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Check, Heart } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// PayFast merchant details
const MERCHANT_ID = "10000100"; // Replace with your actual Merchant ID
const MERCHANT_KEY = "46f0cd694581a"; // Replace with your actual Merchant Key
const PAYFAST_URL = "https://sandbox.payfast.co.za/eng/process"; // Use this for testing

const Donation = () => {
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
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-200 to-amber-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Support Our Mission</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your generous donation helps us continue our spiritual and humanitarian work in the community.
          </p>
        </div>
      </section>
      
      {/* Donation Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>
      
      {/* Why Donate Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How Your Donation Helps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Spiritual Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your donation supports regular spiritual services, meditation sessions, and classes on Vedanta philosophy.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Community Outreach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Help us extend our reach to serve the most vulnerable members of our community through food programs and essential services.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>New Ashram Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Contribute to the development of our new ashram facilities, which will provide space for more spiritual and community activities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donation;
