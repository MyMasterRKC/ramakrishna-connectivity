
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "@/hooks/useUser";
import Index from "./pages/Index";
import About from "./pages/About";
import HolyTrinity from "./pages/HolyTrinity";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Development from "./pages/Development";
import Learn from "./pages/Learn";
import Contact from "./pages/Contact";
import Donation from "./pages/Donation";
import DonationSuccess from "./pages/DonationSuccess";
import UserDashboard from "./pages/UserDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/holy-trinity" element={<HolyTrinity />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/development" element={<Development />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/donation-success" element={<DonationSuccess />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </UserProvider>
  </QueryClientProvider>
);

export default App;
