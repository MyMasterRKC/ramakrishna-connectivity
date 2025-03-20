
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SubMenuItemProps {
  to: string;
  label: string;
  onClick?: () => void;
}

export const SubMenuItem = ({ to, label, onClick }: SubMenuItemProps) => (
  <DropdownMenuItem className="hover:bg-orange-50 focus:bg-orange-50 cursor-pointer">
    <Link to={to} className="w-full" onClick={onClick}>
      {label}
    </Link>
  </DropdownMenuItem>
);

interface DropdownMenuItemProps {
  label: string;
  items: Array<{
    to: string;
    label: string;
  }>;
  onItemClick?: () => void;
}

export const NavDropdownMenuItem = ({ label, items, onItemClick }: DropdownMenuItemProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button className="relative text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 group flex items-center">
        {label}
        <ChevronDown className="ml-1 h-4 w-4" />
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="bg-white shadow-lg border-orange-100 border">
      {items.map((item, index) => (
        <SubMenuItem
          key={index}
          to={item.to}
          label={item.label}
          onClick={onItemClick}
        />
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

interface NavMenuItemProps {
  to: string;
  label: string;
  onClick?: () => void;
}

export const NavMenuItem = ({ to, label, onClick }: NavMenuItemProps) => (
  <Link 
    to={to} 
    className="relative text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 group"
    onClick={onClick}
  >
    {label}
    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
  </Link>
);
