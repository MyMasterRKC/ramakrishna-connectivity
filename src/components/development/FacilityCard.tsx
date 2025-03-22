
import React, { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FacilityCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FacilityCard = ({ icon, title, description }: FacilityCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>
        <p className="text-gray-600 text-center">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FacilityCard;
