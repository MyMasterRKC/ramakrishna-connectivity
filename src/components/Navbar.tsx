
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-16 w-auto"
                src="/lovable-uploads/36956c67-a31d-421b-ba57-e0837ac536cc.png"
                alt="Ramakrishna Centre Logo"
              />
              <div className="ml-3 hidden md:block">
                <h1 className="text-xl font-semibold text-gray-800">Ramakrishna Centre</h1>
                <p className="text-sm text-gray-600">Johannesburg, South Africa</p>
              </div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Gallery</Link>
            <Link to="/development" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">New Ashram</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            <Button variant="default" className="ml-4 bg-orange-600 hover:bg-orange-700">Donate</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-96" : "max-h-0 overflow-hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-inner">
          <Link 
            to="/" 
            className="text-gray-700 hover:text-orange-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-gray-700 hover:text-orange-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="text-gray-700 hover:text-orange-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/gallery" 
            className="text-gray-700 hover:text-orange-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link 
            to="/development" 
            className="text-gray-700 hover:text-orange-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            New Ashram
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-700 hover:text-orange-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Button variant="default" className="w-full bg-orange-600 hover:bg-orange-700 mt-4">Donate</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
