
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, BookOpen, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07')] bg-cover bg-center h-[70vh] flex items-center justify-center after:absolute after:inset-0 after:bg-black after:bg-opacity-50 after:z-0">
          <div className="text-center text-white z-10 relative px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Ramakrishna Centre</h1>
            <h2 className="text-2xl md:text-3xl mb-6">Of South Africa, Johannesburg</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">Dedicated to the principles of harmony, universal acceptance, and spiritual growth through service to humanity.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We offer various spiritual and community services to promote personal growth and social welfare.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <Calendar className="h-8 w-8 text-orange-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Weekly Prayer Services</h3>
                    <p className="text-gray-600">Sundays at Benvenuto Conference Centre from 9am to 10:30am. Join us for prayer, meditation, and spiritual discourse.</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>9:00 AM - 10:30 AM</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <BookOpen className="h-8 w-8 text-orange-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Children's Classes</h3>
                    <p className="text-gray-600">Weekly classes for children from 9:15am to 10am at Benvenuto Conference Centre. Spiritual education for the youth.</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>9:15 AM - 10:00 AM</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <HandHeart className="h-8 w-8 text-orange-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Welfare Programme</h3>
                    <p className="text-gray-600">Monthly community service in Lenasia, providing essential resources and support to those in need.</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Monthly</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <Users className="h-8 w-8 text-orange-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Women's Empowerment</h3>
                    <p className="text-gray-600">Monthly programme in Lenasia focused on empowering women through education, skill development, and spiritual guidance.</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Monthly</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <BookOpen className="h-8 w-8 text-orange-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Children's Education</h3>
                    <p className="text-gray-600">Monthly education programme in Lenasia dedicated to nurturing young minds through holistic education.</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Monthly</span>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex items-center justify-center">
              <Button size="lg" asChild className="mt-4">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* New Ashram Development */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">New Ashram Development</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Our vision for a new spiritual center to serve the community.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e" 
                alt="New Ashram Concept" 
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Building Our Future Together</h3>
              <p className="text-gray-600 mb-6">
                The Ramakrishna Centre of South Africa, Johannesburg is embarking on an exciting new development project to build a permanent ashram. This new spiritual home will allow us to expand our services and better serve our community.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Meditation hall and temple</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Educational classrooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Community service facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Residential quarters</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <Link to="/development">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>
          <blockquote>
            <p className="text-2xl md:text-3xl font-medium italic mb-8">
              "Truth is one; sages call it by various names."
            </p>
          </blockquote>
          <div className="font-semibold">
            <p className="text-xl">Sri Ramakrishna</p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Community</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with us for spiritual growth, community service, and to learn more about our upcoming events and programmes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
