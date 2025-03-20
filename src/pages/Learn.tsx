
import Layout from "@/components/Layout";
import LearnPageHeader from "@/components/learn/LearnPageHeader";
import TeachingsSection from "@/components/learn/TeachingsSection";
import QuizSection from "@/components/learn/QuizSection";
import ResourcesSection from "@/components/learn/ResourcesSection";
import LevelsSection from "@/components/learn/LevelsSection";

const Learn = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <LearnPageHeader />
        <div id="teachings">
          <TeachingsSection />
        </div>
        <QuizSection />
        <LevelsSection />
        <ResourcesSection />
      </div>
    </Layout>
  );
};

export default Learn;
