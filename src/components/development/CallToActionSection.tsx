
import React from "react";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-16 bg-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Support This Sacred Project</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Your contributions of time, skills, and resources can help make this vision a reality. Join us in creating a spiritual landmark for generations to come.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary" className="font-semibold">
            Make a Donation
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600 font-semibold">
            Volunteer Your Skills
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
