
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, BookOpen, HandHeart } from "lucide-react";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-100 to-amber-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The Ramakrishna Centre offers various spiritual and community services to promote harmony, personal growth, and social welfare.
          </p>
        </div>
      </section>
      
      {/* Weekly Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Weekly Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <Calendar className="h-8 w-8 text-orange-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Weekly Prayer Services</h3>
                    <p className="text-gray-600 mb-4">
                      Join us every Sunday for prayer services, meditation, and spiritual discourses at the Benvenuto Conference Centre. These services are open to all, regardless of religious background.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Our prayer services include:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4 pl-4">
                      <li>Meditation and chanting</li>
                      <li>Readings from sacred texts</li>
                      <li>Spiritual discourse</li>
                      <li>Devotional singing</li>
                    </ul>
                    <div className="flex items-center text-sm text-gray-500 mt-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>9:00 AM - 10:30 AM every Sunday</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <BookOpen className="h-8 w-8 text-orange-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Children's Classes</h3>
                    <p className="text-gray-600 mb-4">
                      We offer weekly spiritual and value-based education for children at the Benvenuto Conference Centre. These classes are designed to instill universal values and spiritual principles in a way that children can understand and apply in their lives.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Our children's classes include:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4 pl-4">
                      <li>Stories with moral lessons</li>
                      <li>Value-based activities</li>
                      <li>Simple meditation techniques</li>
                      <li>Cultural and artistic expression</li>
                    </ul>
                    <div className="flex items-center text-sm text-gray-500 mt-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>9:15 AM - 10:00 AM every Sunday</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Monthly Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Monthly Programmes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <HandHeart className="h-8 w-8 text-orange-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Welfare Programme</h3>
                    <p className="text-gray-600 mb-4">
                      Our monthly welfare programme in Lenasia focuses on providing essential resources and support to those in need. We believe in serving humanity as a form of spiritual practice.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Services provided include:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4 pl-4">
                      <li>Distribution of food parcels</li>
                      <li>Clothing donations</li>
                      <li>Basic healthcare assistance</li>
                      <li>Educational support</li>
                    </ul>
                    <div className="flex items-center text-sm text-gray-500 mt-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Monthly programme</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <Users className="h-8 w-8 text-orange-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Women's Empowerment</h3>
                    <p className="text-gray-600 mb-4">
                      Our monthly women's empowerment programme in Lenasia aims to support women through education, skill development, and spiritual guidance. We believe in the potential of every woman to lead, inspire, and transform society.
                    </p>
                    <p className="text-gray-600 mb-4">
                      The programme includes:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4 pl-4">
                      <li>Skill development workshops</li>
                      <li>Health and wellness education</li>
                      <li>Leadership training</li>
                      <li>Spiritual guidance</li>
                    </ul>
                    <div className="flex items-center text-sm text-gray-500 mt-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Monthly programme</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <BookOpen className="h-8 w-8 text-orange-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Children's Education</h3>
                    <p className="text-gray-600 mb-4">
                      Our monthly children's education programme in Lenasia is dedicated to nurturing young minds through holistic education that combines academic support with value-based learning.
                    </p>
                    <p className="text-gray-600 mb-4">
                      The programme includes:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4 pl-4">
                      <li>Tutoring in core subjects</li>
                      <li>Character development</li>
                      <li>Creative arts activities</li>
                      <li>Confidence-building exercises</li>
                    </ul>
                    <div className="flex items-center text-sm text-gray-500 mt-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Monthly programme</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Special Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Special Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Religious Ceremonies</h3>
                <p className="text-gray-600 mb-4">
                  We conduct various religious ceremonies and rituals on special occasions, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 pl-4">
                  <li>Durga Puja</li>
                  <li>Kali Puja</li>
                  <li>Sri Ramakrishna's birthday celebration</li>
                  <li>Holy Mother's birthday celebration</li>
                  <li>Swami Vivekananda's birthday celebration</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Spiritual Retreats</h3>
                <p className="text-gray-600 mb-4">
                  We organize spiritual retreats for individuals seeking deeper spiritual experiences through:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 pl-4">
                  <li>Intensive meditation sessions</li>
                  <li>Silence retreats</li>
                  <li>Study of spiritual texts</li>
                  <li>Spiritual discourses by monks and nuns</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
