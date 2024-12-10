import React from 'react';
import CalculatorResults from '../../components/calculator/CalculatorResults';
import ResultsSection from '../../components/calculator/ResultsSection';
import { ResultItem } from '../../components/calculator/CalculatorResults';

interface MortgageResultsProps {
  results: {
    monthlyPI: string;
    monthlyTax: string;
    monthlyInsurance: string;
    totalMonthly: string;
    totalWithExtra: string;
    yearsToPayoff: string;
    monthsSaved: string;
    interestSaved: string;
  };
}

const MortgageResults = ({ results }: MortgageResultsProps) => {
  return (
    <CalculatorResults>
      <ResultsSection title="Monthly Payments">
        <ResultItem
          label="Base Payment"
          value={results.totalMonthly}
          large
        />
        <ResultItem
          label="With Extra Payment"
          value={results.totalWithExtra}
          large
        />
      </ResultsSection>

      <ResultItem
        label="Principal & Interest"
        value={results.monthlyPI}
      />
      <ResultItem
        label="Property Tax"
        value={results.monthlyTax}
      />
      <ResultItem
        label="Insurance"
        value={results.monthlyInsurance}
      />
      <ResultItem
        label="Years to Payoff"
        value={`${results.yearsToPayoff} years`}
      />
      <ResultItem
        label="Months Saved"
        value={`${results.monthsSaved} months`}
      />
      <ResultItem
        label="Interest Saved"
        value={results.interestSaved}
      />
    </CalculatorResults>
  );
};

export default MortgageResults;