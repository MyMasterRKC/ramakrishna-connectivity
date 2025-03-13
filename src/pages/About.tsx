import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Flower, Flower2, Sun, Mountain } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section with Indian-inspired design */}
      <section className="bg-gradient-to-r from-orange-200 to-amber-100 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10">
            <Flower className="text-orange-500 h-20 w-20" />
          </div>
          <div className="absolute bottom-10 right-10">
            <Flower2 className="text-orange-500 h-20 w-20" />
          </div>
          <div className="absolute top-1/4 right-1/4">
            <Sun className="text-yellow-500 h-16 w-16" />
          </div>
          <div className="absolute bottom-1/4 left-1/4">
            <Mountain className="text-gray-600 h-16 w-16" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Us</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The Ramakrishna Centre of South Africa, Johannesburg is dedicated to spiritual growth, universal harmony, and service to humanity.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIj48cGF0aCBkPSJNMzAgNTJjMSAwIDEuOC0uOCAyLjgtMS4xIDEuMi0uNCAyLjQtLjQgMy40LS45czEuOS0xLjUgMy0xLjljMS4yLS40IDIuNC0uMyAzLjYtLjQgMS4yLS4xIDIuMy0uNyAzLjUtLjkgMS40LS4yIDIuOC4yIDQuMi4zLjcuMSAxLjQuMiAyLjEuNGwxLjEuM2MxLjMuMiAyLjYtLjEgMy45LS4yaC4xYy0uMyAxLjEtLjkgMi0xLjUgMi45LS43IDEtMS42IDItMi43IDIuNi0xLjEuNi0yLjQgMS0zLjcgMS4xLTEuMi4xLTIuNC0uMS0zLjYtLjEtMS4yIDAtMi4zLjMtMy41LjQtMS4xLjEtMi4yLjEtMy4zLjEtMS4xIDAtMi4yLS4xLTMuMy0uMy0xLjEtLjItMi4yLS41LTMuMy0uNy0xLjEtLjItMi4zLS4yLTMuNC0uMi0xLjEgMC0yLjEtLjQtMy4xLS43LS45LS4zLTEuOC0uNi0yLjYtMS0uOC0uNC0xLjYtLjgtMi4zLTEuMy0uNy0uNS0xLjQtMS0yLTEuNi0uNi0uNS0xLjEtMS4xLTEuNi0xLjctLjQtLjUtLjgtMS4xLTEuMi0xLjctLjMtLjUtLjYtMS0uOC0xLjYtLjItLjUtLjQtLjktLjUtMS40LS4xLS41LS4yLS45LS4zLTEuNCAwIC0uMiAwIC0uNCAwIC0uNi4yLjMuNC43LjYgMSAuNC43LjkgMS4zIDEuNSAxLjkuNi42IDEuMiAxLjEgMS45IDEuNS43LjQgMS40LjcgMi4yLjkuOC4yIDEuNi4zIDIuNC4yLjggMCAxLjYtLjIgMi40LS40LjgtLjIgMS41LS41IDIuMy0uOC44LS4zIDEuNS0uNyAyLjMtLjkuOC0uMiAxLjYtLjMgMi40LS4zLjggMCAxLjYuMiAyLjQgMCAuNCAwIC44LS4yIDEuMy0uM3oiLz48L2c+PC9zdmc+')]  bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Mission</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mb-6"></div>
              <p className="text-gray-700 mb-4">
                The Ramakrishna Centre is dedicated to the ideals of Sri Ramakrishna, Swami Vivekananda, and Holy Mother Sri Sarada Devi. We aim to promote universal harmony, spiritual growth, and service to humanity.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is to spread the message of Vedanta and to serve society through various educational, cultural, spiritual, and humanitarian activities.
              </p>
              <p className="text-gray-700">
                We believe in the universal teachings of all religions and the inherent divinity in every individual. Our centre is open to all, regardless of religious background, race, or social status.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md border-4 border-orange-100 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1473177104440-ffee2f376098" 
                alt="Temple Interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-md border-4 border-orange-100 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be" 
                alt="Temple Exterior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Our History</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mb-6"></div>
              <p className="text-gray-700 mb-4">
                The Ramakrishna Centre of South Africa was established with the aim of bringing the universal message of Vedanta to South Africa and to create a spiritual sanctuary for all seekers.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, the Centre has grown from a small gathering of devotees to a thriving spiritual institution that serves the diverse community of Johannesburg and beyond.
              </p>
              <p className="text-gray-700">
                Our history is one of dedication, perseverance, and unwavering commitment to the ideals of spiritual harmony and service to humanity.
              </p>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Values</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto mb-12">
              The Ramakrishna Centre is guided by the following core values that shape our approach to spiritual practice and community service.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-b from-orange-50 to-white border-amber-100">
                <CardContent className="pt-6 relative">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center border-2 border-amber-200">
                      <Flower className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <div className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Universal Harmony</h3>
                    <p className="text-gray-600">
                      We believe in the harmony of all religions and spiritual paths, recognizing that truth is one, though expressed in many ways.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-b from-orange-50 to-white border-amber-100">
                <CardContent className="pt-6 relative">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center border-2 border-amber-200">
                      <Flower2 className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <div className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Selfless Service</h3>
                    <p className="text-gray-600">
                      We are committed to serving humanity selflessly, seeing the divine in every individual we encounter.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-b from-orange-50 to-white border-amber-100">
                <CardContent className="pt-6 relative">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center border-2 border-amber-200">
                      <Sun className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <div className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Spiritual Growth</h3>
                    <p className="text-gray-600">
                      We promote inner transformation and spiritual growth through meditation, prayer, and the study of sacred texts.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
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

export default About;
