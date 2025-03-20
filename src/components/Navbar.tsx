
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import UserMenu from "./auth/UserMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="block h-16">
              <img
                className="h-full w-auto"
                src="/lovable-uploads/a16f0080-9b90-4185-8528-c8db463d33b4.png"
                alt="Ramakrishna Centre Logo"
              />
            </Link>
          </div>
          
          {/* Desktop menu - pushed to the right */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="relative text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 group">
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            
            {/* About dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 group flex items-center">
                  About
                  <ChevronDown className="ml-1 h-4 w-4" />
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg border-orange-100 border">
                <DropdownMenuItem className="hover:bg-orange-50 focus:bg-orange-50 cursor-pointer">
                  <Link to="/about" className="w-full">Johannesburg</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-orange-50 focus:bg-orange-50 cursor-pointer">
                  <Link to="/about/holy-trinity" className="w-full">Holy Trinity</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/services" className="relative text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 group">
              Services
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link to="/gallery" className="relative text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 group">
              Gallery
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link to="/development" className="relative text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 group">
              New Ashram
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            
            {/* Learn dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 group flex items-center">
                  Learn
                  <ChevronDown className="ml-1 h-4 w-4" />
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg border-orange-100 border">
                <DropdownMenuItem className="hover:bg-orange-50 focus:bg-orange-50 cursor-pointer">
                  <Link to="/learn" className="w-full">Overview</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-orange-50 focus:bg-orange-50 cursor-pointer">
                  <Link to="/learn#teachings" className="w-full">Teachings & Philosophy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-orange-50 focus:bg-orange-50 cursor-pointer">
                  <Link to="/learn/assessment" className="w-full">Assessment</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/contact" className="relative text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 group">
              Contact
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <div className="ml-4 flex items-center space-x-4">
              <Button asChild variant="default" className="bg-orange-600 hover:bg-orange-700 transition-colors duration-300">
                <Link to="/donation">Donate</Link>
              </Button>
              <UserMenu />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-screen" : "max-h-0 overflow-hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-inner">
          <Link 
            to="/" 
            className="text-gray-700 hover:text-orange-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          
          {/* Mobile About Menu */}
          <div className="space-y-1">
            <div className="text-gray-700 px-3 py-2 rounded-md text-base font-medium">
              About
            </div>
            <div className="pl-6 space-y-1">
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-orange-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Johannesburg
              </Link>
              <Link 
                to="/about/holy-trinity" 
                className="text-gray-700 hover:text-orange-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Holy Trinity
              </Link>
            </div>
          </div>
          
          <Link 
            to="/services" 
            className="text-gray-700 hover:text-orange-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/gallery" 
            className="text-gray-700 hover:text-orange-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link 
            to="/development" 
            className="text-gray-700 hover:text-orange-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            New Ashram
          </Link>
          
          {/* Mobile Learn Menu */}
          <div className="space-y-1">
            <div className="text-gray-700 px-3 py-2 rounded-md text-base font-medium">
              Learn
            </div>
            <div className="pl-6 space-y-1">
              <Link 
                to="/learn" 
                className="text-gray-700 hover:text-orange-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Overview
              </Link>
              <Link 
                to="/learn#teachings" 
                className="text-gray-700 hover:text-orange-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Teachings & Philosophy
              </Link>
              <Link 
                to="/learn/assessment" 
                className="text-gray-700 hover:text-orange-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Assessment
              </Link>
            </div>
          </div>
          
          <Link 
            to="/contact" 
            className="text-gray-700 hover:text-orange-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-2 pb-1">
            <Button asChild variant="default" className="w-full bg-orange-600 hover:bg-orange-700 mt-2 mb-2 transition-colors duration-300">
              <Link to="/donation" onClick={() => setIsOpen(false)}>Donate</Link>
            </Button>
            <div className="flex justify-center">
              <UserMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
