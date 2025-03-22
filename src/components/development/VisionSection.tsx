
import React from "react";

const VisionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-200 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The Ramakrishna Centre of South Africa, Johannesburg is embarking on an exciting journey to build a permanent ashram that will serve as a spiritual beacon for the community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">A Spiritual Sanctuary</h3>
            <p className="text-gray-700 mb-4">
              Our vision is to create a spiritual sanctuary where people from all walks of life can come to find peace, guidance, and inspiration. The new ashram will be a place of spiritual practice, learning, and service.
            </p>
            <p className="text-gray-700 mb-4">
              The ashram will serve as a centre for promoting the universal teachings of Vedanta as expounded by Sri Ramakrishna, Holy Mother Sri Sarada Devi, and Swami Vivekananda.
            </p>
            <p className="text-gray-700">
              It will be a place where the ancient wisdom of the East meets the progressive spirit of the West, creating a harmonious blend of spiritual values and modern approaches to life's challenges.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e" 
              alt="Ashram Concept" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
