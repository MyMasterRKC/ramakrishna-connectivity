
import React, { ReactNode } from "react";

interface TimelinePhaseProps {
  number: number;
  title: string;
  description: string;
  isRight?: boolean;
}

const TimelinePhase = ({ number, title, description, isRight = false }: TimelinePhaseProps) => {
  return (
    <div className="relative mb-16">
      <div className="flex items-center justify-center mb-4">
        <div className="w-10 h-10 bg-orange-600 rounded-full text-white flex items-center justify-center font-bold z-10">
          {number}
        </div>
      </div>
      <div className={`bg-white p-6 rounded-lg shadow-md ${isRight ? 'mr-0 md:mr-auto md:ml-auto md:w-5/12' : 'ml-0 md:ml-auto md:mr-auto md:w-5/12'} relative`}>
        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${isRight ? '-right-12 w-12' : '-left-12 w-12'} h-1 bg-orange-400`}></div>
        <h3 className="text-xl font-semibold text-orange-600 mb-2">{title}</h3>
        <p className="text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TimelinePhase;
