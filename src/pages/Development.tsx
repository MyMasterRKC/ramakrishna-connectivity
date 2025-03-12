
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Development = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-[url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e')] bg-cover bg-center h-[60vh] flex items-center justify-center after:absolute after:inset-0 after:bg-black after:bg-opacity-50 after:z-0">
          <div className="text-center text-white z-10 relative px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">New Ashram Development</h1>
            <p className="text-xl max-w-2xl mx-auto">Building a spiritual home to serve generations to come</p>
          </div>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The Ramakrishna Centre of South Africa, Johannesburg is embarking on an exciting journey to build a permanent ashram that will serve as a spiritual beacon for the community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">A Spiritual Sanctuary</h3>
              <p className="text-gray-700 mb-4">
                Our vision is to create a spiritual sanctuary where people from all walks of life can come to find peace, guidance, and inspiration. The new ashram will be a place of spiritual practice, learning, and service.
              </p>
              <p className="text-gray-700 mb-4">
                The ashram will serve as a centre for promoting the universal teachings of Vedanta as expounded by Sri Ramakrishna, Holy Mother Sri Sarada Devi, and Swami Vivekananda.
              </p>
              <p className="text-gray-700">
                It will be a place where the ancient wisdom of the East meets the progressive spirit of the West, creating a harmonious blend of spiritual values and modern approaches to life's challenges.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e" 
                alt="Ashram Concept" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Planned Facilities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The new ashram will feature various facilities designed to support spiritual practice, education, and community service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Temple & Meditation Hall</h3>
                <p className="text-gray-600 text-center">
                  A sacred space for daily worship, meditation, and spiritual gatherings.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Library & Study Rooms</h3>
                <p className="text-gray-600 text-center">
                  Comprehensive collection of spiritual and philosophical texts with quiet study areas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Residential Quarters</h3>
                <p className="text-gray-600 text-center">
                  Accommodations for resident monks, nuns, and visitors seeking spiritual retreat.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Community Hall</h3>
                <p className="text-gray-600 text-center">
                  Multipurpose space for cultural programmes, community gatherings, and educational activities.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Classrooms</h3>
                <p className="text-gray-600 text-center">
                  Educational spaces for spiritual classes, workshops, and children's programmes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Administrative Offices</h3>
                <p className="text-gray-600 text-center">
                  Space for managing the centre's operations and community service initiatives.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Garden & Green Spaces</h3>
                <p className="text-gray-600 text-center">
                  Serene outdoor areas for meditation, reflection, and connecting with nature.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Dining Hall</h3>
                <p className="text-gray-600 text-center">
                  Community dining space for prasad distribution and communal meals during special occasions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Development Timeline</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our journey towards building the new ashram is progressing through several planned phases.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-orange-200"></div>
            
            <div className="space-y-12 md:space-y-0">
              {/* Phase 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Phase 1: Planning & Design</h3>
                  <p className="text-gray-600">Development of architectural plans, obtaining necessary permits, and finalizing the design of the ashram.</p>
                </div>
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute -left-4 md:left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-orange-500 border-4 border-white shadow"></div>
                  <div className="ml-0 md:ml-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <p className="text-orange-600 font-semibold">Current Stage</p>
                      <p className="text-gray-600 mt-2">We are currently working with architects to finalize the design that reflects our spiritual and practical needs.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Phase 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="order-2 md:order-1 relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute -left-4 md:left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-300 border-4 border-white shadow"></div>
                  <div className="ml-0 md:ml-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <p className="text-gray-600 font-semibold">Upcoming</p>
                      <p className="text-gray-600 mt-2">Fundraising campaigns and events to gather resources for the construction of the ashram.</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 md:text-left">Phase 2: Fundraising</h3>
                  <p className="text-gray-600 md:text-left">Mobilizing financial resources through donations, grants, and community support for the construction.</p>
                </div>
              </div>
              
              {/* Phase 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Phase 3: Construction</h3>
                  <p className="text-gray-600">Breaking ground and building the physical structure of the ashram according to the approved plans.</p>
                </div>
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute -left-4 md:left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-300 border-4 border-white shadow"></div>
                  <div className="ml-0 md:ml-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <p className="text-gray-600 font-semibold">Future Stage</p>
                      <p className="text-gray-600 mt-2">The construction phase will be carried out in multiple sub-phases, beginning with the temple and main buildings.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Phase 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="order-2 md:order-1 relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute -left-4 md:left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-300 border-4 border-white shadow"></div>
                  <div className="ml-0 md:ml-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <p className="text-gray-600 font-semibold">Future Stage</p>
                      <p className="text-gray-600 mt-2">The grand opening of the ashram will be celebrated with special ceremonies and community events.</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 md:text-left">Phase 4: Completion & Inauguration</h3>
                  <p className="text-gray-600 md:text-left">Finalizing construction, setting up facilities, and officially inaugurating the new ashram.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Support Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Support the Development</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Your generous contribution will help us build a spiritual sanctuary that will serve generations to come. There are many ways you can support this noble cause.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Financial Donations</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Contribute financially to support the construction of the new ashram. Every donation, big or small, brings us closer to our goal.
                </p>
                <div className="flex justify-center">
                  <Button variant="default">Donate Now</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Volunteer Your Time</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Offer your skills, expertise, or time to assist with various aspects of the development project.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline">Register as Volunteer</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Spread the Word</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Help us by spreading awareness about the project within your network and community.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline">Share the Project</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Development;
