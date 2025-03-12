
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-100 to-amber-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The Ramakrishna Centre of South Africa, Johannesburg is dedicated to spiritual growth, universal harmony, and service to humanity.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
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
            <div className="rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1473177104440-ffee2f376098" 
                alt="Temple Interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be" 
                alt="Temple Exterior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our History</h2>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Values</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-12">
              The Ramakrishna Centre is guided by the following core values that shape our approach to spiritual practice and community service.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Universal Harmony</h3>
                  <p className="text-gray-600">
                    We believe in the harmony of all religions and spiritual paths, recognizing that truth is one, though expressed in many ways.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Selfless Service</h3>
                  <p className="text-gray-600">
                    We are committed to serving humanity selflessly, seeing the divine in every individual we encounter.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Spiritual Growth</h3>
                  <p className="text-gray-600">
                    We promote inner transformation and spiritual growth through meditation, prayer, and the study of sacred texts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote>
            <p className="text-2xl md:text-3xl font-medium italic mb-8">
              "As different streams having their sources in different places all mingle their water in the sea, so different tendencies, various though they appear, crooked or straight, all lead to God."
            </p>
          </blockquote>
          <div className="font-semibold">
            <p className="text-xl">Swami Vivekananda</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
