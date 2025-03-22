
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import UserMenu from "../auth/UserMenu";

interface MobileNavMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface MobileSectionProps {
  title: string;
  items: Array<{
    to: string;
    label: string;
  }>;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileSection = ({ title, items, setIsOpen }: MobileSectionProps) => (
  <div className="space-y-1">
    <div className="text-gray-700 px-3 py-2 rounded-md text-base font-medium">
      {title}
    </div>
    <div className="pl-6 space-y-1">
      {items.map((item, index) => (
        <Link 
          key={index}
          to={item.to} 
          className="text-gray-700 hover:text-orange-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </Link>
      ))}
    </div>
  </div>
);

const MobileNavMenu = ({ isOpen, setIsOpen }: MobileNavMenuProps) => {
  const aboutItems = [
    { to: "/about", label: "Johannesburg" },
    { to: "/about/holy-trinity", label: "Holy Trinity" }
  ];

  const learnItems = [
    { to: "/learn", label: "Overview" },
    { to: "/learn/assessment", label: "Assessment" },
    { to: "/learn/games", label: "Games" }
  ];

  return (
    <div className={cn("md:hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-screen" : "max-h-0 overflow-hidden")}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-inner">
        <Link 
          to="/" 
          className="text-gray-700 hover:text-orange-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        
        <MobileSection title="About" items={aboutItems} setIsOpen={setIsOpen} />
        
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
        
        <MobileSection title="Learn" items={learnItems} setIsOpen={setIsOpen} />
        
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
  );
};

export default MobileNavMenu;
