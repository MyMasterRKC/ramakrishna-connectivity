import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users, GraduationCap, BookOpenCheck } from "lucide-react";
import { useUser } from "@/hooks/useUser";
import QuizSelector from "@/components/quiz/QuizSelector";
import Quiz from "@/components/quiz/Quiz";
import AuthModal from "@/components/auth/AuthModal";

const Learn = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { user } = useUser();

  const handleQuizSelect = (quizId: string) => {
    setSelectedQuiz(quizId);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Learn</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the teachings and philosophy of Ramakrishna, Sarada Devi, and Swami Vivekananda.
          </p>
        </div>

        {/* Holy Trinity Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">The Holy Trinity</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sri Ramakrishna */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group animate-fade-in">
              <div className="h-52 bg-gradient-to-b from-orange-50 to-orange-100 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-16 w-16 text-orange-500" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-center text-2xl text-orange-600">Sri Ramakrishna</CardTitle>
                <CardDescription className="text-center">(1836-1886)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sri Ramakrishna Paramahamsa was a Hindu mystic and saint whose spiritual realizations 
                  and universal teachings formed the basis of the Ramakrishna Movement. His emphasis on 
                  the harmony of religions and the essential unity of spiritual truths across different 
                  faiths continues to inspire millions worldwide.
                </p>
              </CardContent>
            </Card>

            {/* Sri Sarada Devi */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group animate-fade-in [animation-delay:200ms]">
              <div className="h-52 bg-gradient-to-b from-orange-50 to-orange-100 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-16 w-16 text-orange-500" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-center text-2xl text-orange-600">Sri Sarada Devi</CardTitle>
                <CardDescription className="text-center">(1853-1920)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sri Sarada Devi, the spiritual consort of Sri Ramakrishna, is known as the Holy Mother. 
                  Her life exemplified patience, compassion, and selfless service. She is revered for her 
                  maternal love and spiritual guidance to all who sought her blessings, regardless of 
                  their background or beliefs.
                </p>
              </CardContent>
            </Card>

            {/* Swami Vivekananda */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group animate-fade-in [animation-delay:400ms]">
              <div className="h-52 bg-gradient-to-b from-orange-50 to-orange-100 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-16 w-16 text-orange-500" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-center text-2xl text-orange-600">Swami Vivekananda</CardTitle>
                <CardDescription className="text-center">(1863-1902)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Swami Vivekananda, the chief disciple of Sri Ramakrishna, was a key figure in introducing 
                  Vedanta and Yoga to the Western world. His inspiring speech at the Parliament of the 
                  World's Religions in 1893 brought worldwide recognition to India's spiritual heritage and 
                  the universal message of religious harmony.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Teachings Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Teachings & Philosophy</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
          </div>

          <Tabs defaultValue="core" className="animate-fade-in">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="core" className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700">
                <BookOpen className="mr-2 h-4 w-4" />
                Core Principles
              </TabsTrigger>
              <TabsTrigger value="vedanta" className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700">
                <GraduationCap className="mr-2 h-4 w-4" />
                Vedanta Philosophy
              </TabsTrigger>
              <TabsTrigger value="practices" className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700">
                <Users className="mr-2 h-4 w-4" />
                Spiritual Practices
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="core" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Core Principles</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  <div>
                    <p className="font-medium">Harmony of Religions</p>
                    <p className="text-gray-600">All religions are different paths leading to the same goal. Truth is one; sages call it by various names.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  <div>
                    <p className="font-medium">Potential Divinity</p>
                    <p className="text-gray-600">Every soul is potentially divine. The goal is to manifest this divinity within by controlling nature, external and internal.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  <div>
                    <p className="font-medium">Service to Humanity</p>
                    <p className="text-gray-600">Service to humanity is service to God. The highest worship of God is service to all beings.</p>
                  </div>
                </li>
              </ul>
            </TabsContent>
            
            <TabsContent value="vedanta" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Vedanta Philosophy</h3>
              <p className="text-gray-600 mb-4">
                Vedanta represents the philosophical portion of the ancient scriptures of India, the Vedas. Its fundamental teaching is that human beings have infinite potential. The Ramakrishna Movement promotes Practical Vedanta as taught by Swami Vivekananda.
              </p>
              <p className="text-gray-600">
                Key concepts include:
              </p>
              <ul className="space-y-2 mt-2">
                <li className="flex">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  <p className="text-gray-600">Non-dualism (Advaita): The ultimate reality is one indivisible consciousness</p>
                </li>
                <li className="flex">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  <p className="text-gray-600">Brahman: The ultimate reality that is infinite, eternal, and unchanging</p>
                </li>
                <li className="flex">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  <p className="text-gray-600">Atman: The individual self, which is identical with Brahman</p>
                </li>
              </ul>
            </TabsContent>
            
            <TabsContent value="practices" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Spiritual Practices</h3>
              <p className="text-gray-600 mb-4">
                The Ramakrishna Movement emphasizes a balanced approach to spiritual life, combining meditation, devotion, selfless work, and philosophical inquiry.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-medium text-orange-700 mb-2">Meditation (Raja Yoga)</h4>
                  <p className="text-gray-600">Regular practice of concentration and meditation to control the mind and realize one's true nature.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-medium text-orange-700 mb-2">Devotion (Bhakti Yoga)</h4>
                  <p className="text-gray-600">Cultivating love and devotion to God through prayer, worship, and singing of devotional songs.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-medium text-orange-700 mb-2">Selfless Work (Karma Yoga)</h4>
                  <p className="text-gray-600">Performing action without attachment to results, seeing work as worship.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-medium text-orange-700 mb-2">Knowledge (Jnana Yoga)</h4>
                  <p className="text-gray-600">Discrimination between the real and the unreal, leading to self-knowledge.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Quiz Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz & Assessment</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Test your knowledge about the Holy Trinity and track your progress.
              {!user && " Login to save your quiz results and access all quizzes."}
            </p>
          </div>

          {selectedQuiz ? (
            <Quiz quizId={selectedQuiz} onBack={() => setSelectedQuiz(null)} />
          ) : (
            <div className="animate-fade-in">
              <div className="flex flex-col items-center justify-center mb-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpenCheck className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Knowledge Assessment</h3>
                <p className="text-center text-gray-600 max-w-xl">
                  Some quizzes are available for everyone, while others require login to access. 
                  Challenge yourself to deepen your understanding of the Holy Trinity.
                </p>
              </div>
              <QuizSelector onSelectQuiz={handleQuizSelect} />
            </div>
          )}
        </section>

        {/* Resources Section */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Resources</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-orange-600">Recommended Books</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 font-bold">•</span>
                    <p className="text-gray-600">The Gospel of Sri Ramakrishna</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 font-bold">•</span>
                    <p className="text-gray-600">The Complete Works of Swami Vivekananda</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 font-bold">•</span>
                    <p className="text-gray-600">Sri Sarada Devi: The Holy Mother</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 font-bold">•</span>
                    <p className="text-gray-600">Meditation and Its Methods by Swami Vivekananda</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 font-bold">•</span>
                    <p className="text-gray-600">Bhagavad Gita (with commentary)</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-orange-600">Online Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 font-bold">•</span>
                    <p className="text-gray-600">Ramakrishna Math and Mission (Official Website)</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 font-bold">•</span>
                    <p className="text-gray-600">Vedanta Society Digital Library</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 font-bold">•</span>
                    <p className="text-gray-600">Belur Math YouTube Channel</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 font-bold">•</span>
                    <p className="text-gray-600">Complete Works of Swami Vivekananda (Online)</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 font-bold">•</span>
                    <p className="text-gray-600">Ramakrishna Centre of South Africa Resources</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
      />
    </Layout>
  );
};

export default Learn;
