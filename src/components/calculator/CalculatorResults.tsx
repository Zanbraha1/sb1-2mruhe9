import React, { ReactNode } from 'react';

interface ResultItemProps {
  label: string;
  value: string;
  large?: boolean;
}

interface CalculatorResultsProps {
  children: ReactNode;
}

export const ResultItem = ({ label, value, large = false }: ResultItemProps) => {
  return (
    <div>
      <h3 className={`${large ? 'text-xl' : 'text-lg'} font-semibold text-gray-700`}>{label}</h3>
      <p className={`result-value ${large ? 'text-3xl' : ''}`}>{value}</p>
    </div>
  );
};

const CalculatorResults = ({ children }: CalculatorResultsProps) => {
  return (
    <div className="calculator-result">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
};

export default CalculatorResults;