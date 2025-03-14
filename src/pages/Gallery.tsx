
import Layout from "@/components/Layout";
import { useState } from "react";
import { X } from "lucide-react";

// Sample placeholder images
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    alt: "Temple Building",
    category: "centre"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
    alt: "Temple Interior",
    category: "centre"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    alt: "Evening Ceremony",
    category: "events"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    alt: "Community Garden",
    category: "activities"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    alt: "Prayer Ceremony",
    category: "events"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    alt: "Community Service",
    category: "activities"
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filter, setFilter] = useState("all");
  
  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-200 to-amber-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Photo Gallery</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A visual journey through our centre's activities, events, and community programmes.
          </p>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex justify-center mb-10">
            <div className="flex flex-wrap gap-2 md:gap-4">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  filter === "all" 
                    ? "bg-orange-600 text-white" 
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("centre")}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  filter === "centre" 
                    ? "bg-orange-600 text-white" 
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Our Centre
              </button>
              <button
                onClick={() => setFilter("events")}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  filter === "events" 
                    ? "bg-orange-600 text-white" 
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Events
              </button>
              <button
                onClick={() => setFilter("activities")}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  filter === "activities" 
                    ? "bg-orange-600 text-white" 
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Activities
              </button>
            </div>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="relative overflow-hidden rounded-lg shadow-md group"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Add Image Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-5xl w-full">
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
                >
                  <X className="h-6 w-6" />
                </button>
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="w-full h-auto max-h-[calc(100vh-8rem)] object-contain rounded-lg"
                />
                <div className="mt-4 text-white">
                  <p className="text-xl font-medium">{selectedImage.alt}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Placeholder Message */}
      <section className="py-8 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700">
            These are placeholder images. You can replace them with actual images of your centre, events, and activities.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
