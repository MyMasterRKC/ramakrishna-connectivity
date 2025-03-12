
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Ramakrishna Centre</h3>
            <p className="text-gray-300 mb-4">Dedicated to the ideals of Sri Ramakrishna, promoting harmony, spiritual growth, and community service.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-orange-500">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-orange-500">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-orange-500">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-orange-500">Photo Gallery</Link></li>
              <li><Link to="/development" className="text-gray-300 hover:text-orange-500">New Ashram Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Weekly Prayer Services</li>
              <li className="text-gray-300">Children's Classes</li>
              <li className="text-gray-300">Welfare Programme</li>
              <li className="text-gray-300">Women's Empowerment</li>
              <li className="text-gray-300">Children's Education</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-300">Benvenuto Conference Centre, Johannesburg, South Africa</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-orange-500" />
                <p className="text-gray-300">+27 (0)XX XXX XXXX</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-orange-500" />
                <p className="text-gray-300">info@ramakrishnacentre.org.za</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Ramakrishna Centre of South Africa, Johannesburg. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
