
import Layout from "@/components/Layout";
import QuizSection from "@/components/learn/QuizSection";

const LearnAssessment = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Assessment</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Test your knowledge of the Holy Trinity and Vedanta philosophy through our interactive quizzes.
          </p>
        </div>
        
        <QuizSection />
      </div>
    </Layout>
  );
};

export default LearnAssessment;
