
import React from "react";
import Layout from "@/components/Layout";
import DonationHero from "@/components/donation/DonationHero";
import DonationForm from "@/components/donation/DonationForm";
import DonationBenefits from "@/components/donation/DonationBenefits";

const Donation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <DonationHero />
      
      {/* Donation Form Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <DonationForm />
        </div>
      </section>
      
      {/* Why Donate Section */}
      <DonationBenefits />
    </Layout>
  );
};

export default Donation;
