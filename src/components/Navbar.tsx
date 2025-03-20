
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import DesktopNavMenu from "./navigation/DesktopNavMenu";
import MobileNavMenu from "./navigation/MobileNavMenu";

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
          
          {/* Desktop menu */}
          <DesktopNavMenu />
          
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
      <MobileNavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;
