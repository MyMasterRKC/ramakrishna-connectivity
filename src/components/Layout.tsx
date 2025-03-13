
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white bg-[radial-gradient(circle,_rgba(0,0,0,0.03)_1px,_transparent_1px)] bg-[size:20px_20px]">
      <Navbar />
      <main className="flex-grow animate-fade-in">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
