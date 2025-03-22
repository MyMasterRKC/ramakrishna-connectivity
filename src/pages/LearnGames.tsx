
import Layout from "@/components/Layout";
import GamesHeader from "@/components/games/GamesHeader";
import WordleGame from "@/components/games/WordleGame";

const LearnGames = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <GamesHeader />
        <WordleGame />
      </div>
    </Layout>
  );
};

export default LearnGames;
