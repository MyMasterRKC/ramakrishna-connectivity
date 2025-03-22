
import Layout from "@/components/Layout";
import DevelopmentHero from "@/components/development/DevelopmentHero";
import VisionSection from "@/components/development/VisionSection";
import ModelViewerSection from "@/components/development/ModelViewerSection";
import FacilitiesSection from "@/components/development/FacilitiesSection";
import TimelineSection from "@/components/development/TimelineSection";
import CallToActionSection from "@/components/development/CallToActionSection";

const Development = () => {
  return (
    <Layout>
      <DevelopmentHero />
      <VisionSection />
      <ModelViewerSection />
      <FacilitiesSection />
      <TimelineSection />
      <CallToActionSection />
    </Layout>
  );
};

export default Development;
