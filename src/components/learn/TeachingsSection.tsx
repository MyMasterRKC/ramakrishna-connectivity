
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, GraduationCap, Users } from "lucide-react";

const TeachingsSection = () => {
  return (
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
  );
};

export default TeachingsSection;
