
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

type BenefitProps = {
  title: string;
  description: string;
};

const Benefit = ({ title, description }: BenefitProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
          <Check className="h-6 w-6 text-orange-600" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const DonationBenefits = () => {
  const benefits = [
    {
      title: "Spiritual Activities",
      description: "Your donation supports regular spiritual services, meditation sessions, and classes on Vedanta philosophy."
    },
    {
      title: "Community Outreach",
      description: "Help us extend our reach to serve the most vulnerable members of our community through food programs and essential services."
    },
    {
      title: "New Ashram Development",
      description: "Contribute to the development of our new ashram facilities, which will provide space for more spiritual and community activities."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How Your Donation Helps</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Benefit 
              key={index}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationBenefits;
