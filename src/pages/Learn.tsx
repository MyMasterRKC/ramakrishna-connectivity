
import Layout from "@/components/Layout";
import LearnPageHeader from "@/components/learn/LearnPageHeader";
import TeachingsSection from "@/components/learn/TeachingsSection";
import QuizSection from "@/components/learn/QuizSection";
import ResourcesSection from "@/components/learn/ResourcesSection";

const Learn = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIj48cGF0aCBmaWxsPSIjRkZFNUI0IiBkPSJNMzAgNTJjMSAwIDEuOC0uOCAyLjgtMS4xIDEuMi0uNCAyLjQtLjQgMy40LS45czEuOS0xLjUgMy0xLjljMS4yLS40IDIuNC0uMyAzLjYtLjQgMS4yLS4xIDIuMy0uNyAzLjUtLjkgMS40LS4yIDIuOC4yIDQuMi4zLjcuMSAxLjQuMiAyLjEuNGwxLjEuM2MxLjMuMiAyLjYtLjEgMy45LS4yaC4xYy0uMyAxLjEtLjkgMi0xLjUgMi45LS43IDEtMS42IDItMi43IDIuNi0xLjEuNi0yLjQgMS0zLjcgMS4xLTEuMi4xLTIuNC0uMS0zLjYtLjEtMS4yIDAtMi4zLjMtMy41LjQtMS4xLjEtMi4yLjEtMy4zLjEtMS4xIDAtMi4yLS4xLTMuMy0uMy0xLjEtLjItMi4yLS41LTMuMy0uNy0xLjEtLjItMi4zLS4yLTMuNC0uMi0xLjEgMC0yLjEtLjQtMy4xLS43LS45LS4zLTEuOC0uNi0yLjYtMS0uOC0uNC0xLjYtLjgtMi4zLTEuMy0uNy0uNS0xLjQtMS0yLTEuNi0uNi0uNS0xLjEtMS4xLTEuNi0xLjctLjQtLjUtLjgtMS4xLTEuMi0xLjctLjMtLjUtLjYtMS0uOC0xLjYtLjItLjUtLjQtLjktLjUtMS40LS4xLS41LS4yLS45LS4zLTEuNCAwIC0uMiAwIC0uNCAwIC0uNi4yLjMuNC43LjYgMSAuNC43LjkgMS4zIDEuNSAxLjkuNi42IDEuMiAxLjEgMS45IDEuNS43LjQgMS40LjcgMi4yLjkuOC4yIDEuNi4zIDIuNC4yLjggMCAxLjYtLjIgMi40LS40LjgtLjIgMS41LS41IDIuMy0uOC44LS4zIDEuNS0uNyAyLjMtLjkuOC0uMiAxLjYtLjMgMi40LS4zLjggMCAxLjYuMiAyLjQgMCAuNCAwIC44LS4yIDEuMy0uM3oiLz48L2c+PC9zdmc+')]  bg-opacity-5">
        <LearnPageHeader />
        <TeachingsSection />
        <QuizSection />
        <ResourcesSection />
      </div>
    </Layout>
  );
};

export default Learn;
