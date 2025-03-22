
import React, { ReactNode } from "react";

interface TimelinePhaseProps {
  number: number;
  title: string;
  description: string;
  isRight?: boolean;
  status?: 'completed' | 'active' | 'pending';
  icon?: ReactNode;
}

const TimelinePhase = ({ 
  number, 
  title, 
  description, 
  isRight = false,
  status = 'pending',
  icon
}: TimelinePhaseProps) => {
  // Determine the card background color based on status
  const cardBgColor = 
    status === 'completed' ? 'bg-green-50 border-green-200' :
    status === 'active' ? 'bg-blue-50 border-blue-200' :
    'bg-white border-orange-200';

  // Determine the title color based on status
  const titleColor = 
    status === 'completed' ? 'text-green-600' :
    status === 'active' ? 'text-blue-600' :
    'text-orange-600';

  return (
    <div className="relative mb-16 animate-fade-in">
      <div className="flex items-center justify-center mb-4">
        <div className={`
          w-12 h-12 rounded-full text-white flex items-center justify-center font-bold z-10
          ${status === 'completed' ? 'bg-green-600' : 
            status === 'active' ? 'bg-blue-600' : 
            'bg-orange-600'}
          ${status === 'active' ? 'ring-4 ring-blue-200 animate-pulse' : ''}
        `}>
          {icon || number}
        </div>
      </div>
      <div className={`
        ${cardBgColor} p-6 rounded-lg shadow-md border 
        ${isRight ? 'mr-0 md:mr-auto md:ml-auto md:w-5/12' : 'ml-0 md:ml-auto md:mr-auto md:w-5/12'} 
        relative transition-all hover:shadow-lg transform hover:-translate-y-1
      `}>
        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${isRight ? '-right-12 w-12' : '-left-12 w-12'} h-1 bg-orange-400`}></div>
        <h3 className={`text-xl font-semibold ${titleColor} mb-2`}>{title}</h3>
        <p className="text-gray-700">
          {description}
        </p>
        {status === 'active' && (
          <div className="mt-4 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded inline-block">
            Current Phase
          </div>
        )}
        {status === 'completed' && (
          <div className="mt-4 bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded inline-block">
            Completed
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePhase;
