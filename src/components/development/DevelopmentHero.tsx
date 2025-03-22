
import React from "react";

const DevelopmentHero = () => {
  return (
    <section className="relative">
      <div className="bg-[url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e')] bg-cover bg-center h-[60vh] flex items-center justify-center after:absolute after:inset-0 after:bg-black after:bg-opacity-50 after:z-0">
        <div className="text-center text-white z-10 relative px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">New Ashram Development</h1>
          <p className="text-xl max-w-2xl mx-auto">Building a spiritual home to serve generations to come</p>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentHero;
