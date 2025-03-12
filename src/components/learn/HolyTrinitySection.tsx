
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

const HolyTrinitySection = () => {
  return (
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
  );
};

export default HolyTrinitySection;
