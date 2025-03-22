
import React from "react";
import TimelinePhase from "./TimelinePhase";

const TimelineSection = () => {
  const phases = [
    {
      number: 1,
      title: "Phase 1: Land Acquisition",
      description: "Securing suitable land in a peaceful location with good accessibility for our community.",
      isRight: false
    },
    {
      number: 2,
      title: "Phase 2: Design & Planning",
      description: "Working with architects and engineers to create designs that reflect our spiritual values and meet practical needs.",
      isRight: true
    },
    {
      number: 3,
      title: "Phase 3: Fundraising Campaign",
      description: "Engaging with our community and supporters to raise the resources needed for construction.",
      isRight: false
    },
    {
      number: 4,
      title: "Phase 4: Construction",
      description: "Building the ashram facilities in stages, beginning with the temple and essential infrastructure.",
      isRight: true
    },
    {
      number: 5,
      title: "Phase 5: Opening & Dedication",
      description: "Celebrating the opening of our new spiritual home with special ceremonies and community events.",
      isRight: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-200 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Development Timeline</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our project is progressing through several key phases as we work to bring this vision to reality.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute h-full w-1 bg-orange-400 left-1/2 transform -translate-x-1/2"></div>
          
          {phases.map((phase, index) => (
            <TimelinePhase 
              key={index}
              number={phase.number}
              title={phase.title}
              description={phase.description}
              isRight={phase.isRight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
