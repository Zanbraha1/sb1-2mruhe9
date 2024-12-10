import React, { ReactNode } from 'react';

interface ResultsSectionProps {
  title: string;
  children: ReactNode;
}

const ResultsSection = ({ title, children }: ResultsSectionProps) => {
  return (
    <div className="md:col-span-2 border-b border-navy-200 pb-4 mb-4">
      <h3 className="text-xl font-bold text-navy-600">{title}</h3>
      <div className="grid grid-cols-2 gap-4 mt-2">
        {children}
      </div>
    </div>
  );
};

export default ResultsSection;