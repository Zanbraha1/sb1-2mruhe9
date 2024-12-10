import React from 'react';
import CalculatorLayout from '../../components/CalculatorLayout';
import { CALCULATOR_IMAGES } from '../../utils/images';
import CalculatorForm from './CalculatorForm';
import CalculatorResults from './CalculatorResults';
import { useMortgageCalculator } from './useMortgageCalculator';

const MortgagePaymentCalculator = () => {
  const { state, updateField, results } = useMortgageCalculator();

  const blogContent = `
    <h2>Understanding Your Mortgage Payment</h2>
    <p>As your local real estate expert, I help clients understand the components of their mortgage payments. This calculator breaks down your payment and shows how extra payments can save you money over time.</p>

    <h2>Payment Components</h2>
    <ul>
      <li><strong>Principal and Interest (P&I):</strong> The base mortgage payment</li>
      <li><strong>Property Taxes:</strong> Annual taxes divided into monthly payments</li>
      <li><strong>Homeowners Insurance:</strong> Annual premium divided monthly</li>
      <li><strong>Extra Payments:</strong> Optional additional principal payments</li>
    </ul>

    <h2>Benefits of Extra Payments</h2>
    <p>Making extra payments towards your principal can:</p>
    <ul>
      <li>Reduce your loan term significantly</li>
      <li>Save thousands in interest charges</li>
      <li>Build equity faster</li>
      <li>Provide financial flexibility</li>
    </ul>
  `;

  return (
    <CalculatorLayout
      title="Mortgage Payment Calculator"
      description="Calculate your monthly mortgage payment and see the impact of extra payments"
      blogContent={blogContent}
    >
      <CalculatorForm state={state} updateField={updateField} />
      <CalculatorResults results={results} />
    </CalculatorLayout>
  );
};

export default MortgagePaymentCalculator;