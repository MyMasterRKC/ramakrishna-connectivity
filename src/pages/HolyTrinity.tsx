import Layout from "@/components/Layout";
import { Flower, Flower2, Sun } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HolyTrinity = () => {
  return (
    <Layout>
      {/* Hero Section with Indian-inspired design */}
      <section className="bg-gradient-to-r from-orange-200 to-amber-100 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-5 left-5 transform -rotate-12">
            <Flower className="text-orange-500 h-24 w-24" />
          </div>
          <div className="absolute bottom-5 right-5 transform rotate-12">
            <Flower2 className="text-orange-500 h-24 w-24" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Sun className="text-yellow-500 h-40 w-40 opacity-20" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">The Holy Trinity</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the spiritual legacy of Sri Ramakrishna, Sri Sarada Devi, and Swami Vivekananda, 
            whose teachings form the foundation of the Ramakrishna Movement.
          </p>
        </div>
      </section>
      
      {/* Main Content - Holy Trinity Section with enhanced Indian design elements */}
      <section className="py-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIj48cGF0aCBkPSJNMzYgMzRjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0tOC0xNGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bS0xNiA2YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptLTggMjJjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTQwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptNDAtOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bTI0IDQwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptLTQwIDBjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0yNC0yNGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6Ii8+PHBhdGggZmlsbD0iI0ZGRTVCNCIgZD0iTTQgMGg0djRoLTR6bTUyIDBoNHY0aC00ek00IDU2aDR2NGgtNHptNTIgMGg0djRoLTR6bS01MiAwaDR2NGgtNHptNTIgMGg0djRoLTR6bS01Mi01Nmg0djRoLTR6bTUyIDBoNHY0aC00eiIvPjwvZz48L3N2Zz4=')] bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sri Ramakrishna */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group animate-fade-in border-amber-100 bg-gradient-to-b from-orange-50 to-white">
              <div className="h-52 bg-gradient-to-b from-orange-100 to-amber-50 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-orange-200 to-amber-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-amber-200">
                  <Flower className="h-16 w-16 text-orange-500" />
                </div>
              </div>
              <CardHeader className="border-b border-amber-100">
                <CardTitle className="text-center text-2xl text-orange-600">Sri Ramakrishna</CardTitle>
                <CardDescription className="text-center">(1836-1886)</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600">
                  Sri Ramakrishna Paramahamsa was a Hindu mystic and saint whose spiritual realizations 
                  and universal teachings formed the basis of the Ramakrishna Movement. His emphasis on 
                  the harmony of religions and the essential unity of spiritual truths across different 
                  faiths continues to inspire millions worldwide.
                </p>
                <blockquote className="border-l-4 border-orange-400 pl-4 my-4 italic text-gray-600">
                  "As many faiths, so many paths."
                </blockquote>
                <p className="text-gray-600">
                  He experienced spiritual ecstasies from a young age and sought the Divine through 
                  various religious paths, ultimately affirming that all religions lead to the same 
                  ultimate reality.
                </p>
              </CardContent>
            </Card>

            {/* Sri Sarada Devi */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group animate-fade-in [animation-delay:200ms] border-amber-100 bg-gradient-to-b from-orange-50 to-white">
              <div className="h-52 bg-gradient-to-b from-orange-100 to-amber-50 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-orange-200 to-amber-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-amber-200">
                  <Flower2 className="h-16 w-16 text-orange-500" />
                </div>
              </div>
              <CardHeader className="border-b border-amber-100">
                <CardTitle className="text-center text-2xl text-orange-600">Sri Sarada Devi</CardTitle>
                <CardDescription className="text-center">(1853-1920)</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600">
                  Sri Sarada Devi, the spiritual consort of Sri Ramakrishna, is known as the Holy Mother. 
                  Her life exemplified patience, compassion, and selfless service. She is revered for her 
                  maternal love and spiritual guidance to all who sought her blessings, regardless of 
                  their background or beliefs.
                </p>
                <blockquote className="border-l-4 border-orange-400 pl-4 my-4 italic text-gray-600">
                  "I am the mother of the virtuous as well as the wicked."
                </blockquote>
                <p className="text-gray-600">
                  After Sri Ramakrishna's passing, she became a spiritual leader in her own right, 
                  embodying motherly love and wisdom for all devotees who came to her.
                </p>
              </CardContent>
            </Card>

            {/* Swami Vivekananda */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group animate-fade-in [animation-delay:400ms] border-amber-100 bg-gradient-to-b from-orange-50 to-white">
              <div className="h-52 bg-gradient-to-b from-orange-100 to-amber-50 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-orange-200 to-amber-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-amber-200">
                  <Sun className="h-16 w-16 text-orange-500" />
                </div>
              </div>
              <CardHeader className="border-b border-amber-100">
                <CardTitle className="text-center text-2xl text-orange-600">Swami Vivekananda</CardTitle>
                <CardDescription className="text-center">(1863-1902)</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600">
                  Swami Vivekananda, the chief disciple of Sri Ramakrishna, was a key figure in introducing 
                  Vedanta and Yoga to the Western world. His inspiring speech at the Parliament of the 
                  World's Religions in 1893 brought worldwide recognition to India's spiritual heritage and 
                  the universal message of religious harmony.
                </p>
                <blockquote className="border-l-4 border-orange-400 pl-4 my-4 italic text-gray-600">
                  "Arise, awake, and stop not till the goal is reached."
                </blockquote>
                <p className="text-gray-600">
                  He founded the Ramakrishna Mission, which continues his legacy of combining spiritual 
                  practice with social service. His teachings on strength, self-confidence, and human 
                  potential continue to inspire millions around the world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Quote Section with Indian-inspired design */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center">
                <Flower className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <blockquote>
              <p className="text-2xl md:text-3xl font-medium italic mb-8">
                "As different streams having their sources in different places all mingle their water in the sea, so different tendencies, various though they appear, crooked or straight, all lead to God."
              </p>
            </blockquote>
            <div className="font-semibold">
              <p className="text-xl">Swami Vivekananda</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HolyTrinity;
