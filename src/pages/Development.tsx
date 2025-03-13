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
      <section className="py-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIj48cGF0aCBmaWxsPSIjRkZFNUI0IiBkPSJNMzAgNTJjMSAwIDEuOC0uOCAyLjgtMS4xIDEuMi0uNCAyLjQtLjQgMy40LS45czEuOS0xLjUgMy0xLjljMS4yLS40IDIuNC0uMyAzLjYtLjQgMS4yLS4xIDIuMy0uNyAzLjUtLjkgMS40LS4yIDIuOC4yIDQuMi4zLjcuMSAxLjQuMiAyLjEuNGwxLjEuM2MxLjMuMiAyLjYtLjEgMy45LS4yaC4xYy0uMyAxLjEtLjkgMi0xLjUgMi45LS43IDEtMS42IDItMi43IDIuNi0xLjEuNi0yLjQgMS0zLjcgMS4xLTEuMi4xLTIuNC0uMS0zLjYtLjEtMS4yIDAtMi4zLjMtMy41LjQtMS4xLjEtMi4yLjEtMy4zLjEtMS4xIDAtMi4yLS4xLTMuMy0uMy0xLjEtLjItMi4yLS41LTMuMy0uNy0xLjEtLjItMi4zLS4yLTMuNC0uMi0xLjEgMC0yLjEtLjQtMy4xLS43LS45LS4zLTEuOC0uNi0yLjYtMS0uOC0uNC0xLjYtLjgtMi4zLTEuMy0uNy0uNS0xLjQtMS0yLTEuNi0uNi0uNS0xLjEtMS4xLTEuNi0xLjctLjQtLjUtLjgtMS4xLTEuMi0xLjctLjMtLjUtLjYtMS0uOC0xLjYtLjItLjUtLjQtLjktLjUtMS40LS4xLS41LS4yLS45LS4zLTEuNCAwIC0uMiAwIC0uNCAwIC0uNi4yLjMuNC43LjYgMSAuNC43LjkgMS4zIDEuNSAxLjkuNi42IDEuMiAxLjEgMS45IDEuNS43LjQgMS40LjcgMi4yLjkuOC4yIDEuNi4zIDIuNC4yLjggMCAxLjYtLjIgMi40LS40LjgtLjIgMS41LS41IDIuMy0uOC44LS4zIDEuNS0uNyAyLjMtLjkuOC0uMiAxLjYtLjMgMi40LS4zLjggMCAxLjYuMiAyLjQgMCAuNCAwIC44LS4yIDEuMy0uM3oiLz48L2c+PC9zdmc+')]  bg-opacity-5">
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
      <section className="py-16 bg-orange-50">
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
      <section className="py-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIj48cGF0aCBmaWxsPSIjRkZFNUI0IiBkPSJNMzAgNTJjMSAwIDEuOC0uOCAyLjgtMS4xIDEuMi0uNCAyLjQtLjQgMy40LS45czEuOS0xLjUgMy0xLjljMS4yLS40IDIuNC0uMyAzLjYtLjQgMS4yLS4xIDIuMy0uNyAzLjUtLjkgMS40LS4yIDIuOC4yIDQuMi4zLjcuMSAxLjQuMiAyLjEuNGwxLjEuM2MxLjMuMiAyLjYtLjEgMy45LS4yaC4xYy0uMyAxLjEtLjkgMi0xLjUgMi45LS43IDEtMS42IDItMi43IDIuNi0xLjEuNi0yLjQgMS0zLjcgMS4xLTEuMi4xLTIuNC0uMS0zLjYtLjEtMS4yIDAtMi4zLjMtMy
