
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const DonationSuccess = () => {
  return (
    <Layout>
      <div className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-green-100">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Thank You for Your Donation!</h1>
          </CardHeader>
          <CardContent className="text-center pt-4">
            <p className="text-lg text-gray-600 mb-6">
              Your contribution makes a meaningful difference in supporting our spiritual work and community service.
            </p>
            <p className="text-md text-gray-500 mb-8">
              A receipt has been sent to your email address.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center">
              <Button asChild>
                <Link to="/">Return to Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/donation">Make Another Donation</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default DonationSuccess;
