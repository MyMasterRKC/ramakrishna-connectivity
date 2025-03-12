
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ResourcesSection = () => {
  return (
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
  );
};

export default ResourcesSection;
