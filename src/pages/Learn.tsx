
import Layout from "@/components/Layout";
import LearnPageHeader from "@/components/learn/LearnPageHeader";
import TeachingsSection from "@/components/learn/TeachingsSection";
import ResourcesSection from "@/components/learn/ResourcesSection";

const Learn = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <LearnPageHeader />
        <TeachingsSection />
        <ResourcesSection />
      </div>
    </Layout>
  );
};

export default Learn;
