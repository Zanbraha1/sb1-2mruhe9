import React, { ReactNode } from 'react';

interface CalculatorSectionProps {
  title: string;
  children: ReactNode;
}

const CalculatorSection = ({ title, children }: CalculatorSectionProps) => {
  return (
    <div className="bg-navy-50 p-4 rounded-lg mb-6">
      <h3 className="text-lg font-semibold text-navy-600 mb-2">{title}</h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

export default CalculatorSection;