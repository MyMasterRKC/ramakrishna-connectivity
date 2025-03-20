
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import UserMenu from "../auth/UserMenu";
import { NavMenuItem, NavDropdownMenuItem } from "./NavMenuItem";

const DesktopNavMenu = () => {
  const aboutItems = [
    { to: "/about", label: "Johannesburg" },
    { to: "/about/holy-trinity", label: "Holy Trinity" }
  ];

  const learnItems = [
    { to: "/learn", label: "Overview" },
    { to: "/learn#teachings", label: "Teachings & Philosophy" },
    { to: "/learn/assessment", label: "Assessment" }
  ];

  return (
    <div className="hidden md:flex md:items-center md:space-x-4">
      <NavMenuItem to="/" label="Home" />
      
      <NavDropdownMenuItem label="About" items={aboutItems} />
      
      <NavMenuItem to="/services" label="Services" />
      <NavMenuItem to="/gallery" label="Gallery" />
      <NavMenuItem to="/development" label="New Ashram" />
      
      <NavDropdownMenuItem label="Learn" items={learnItems} />
      
      <NavMenuItem to="/contact" label="Contact" />
      <div className="ml-4 flex items-center space-x-4">
        <Button asChild variant="default" className="bg-orange-600 hover:bg-orange-700 transition-colors duration-300">
          <Link to="/donation">Donate</Link>
        </Button>
        <UserMenu />
      </div>
    </div>
  );
};

export default DesktopNavMenu;
