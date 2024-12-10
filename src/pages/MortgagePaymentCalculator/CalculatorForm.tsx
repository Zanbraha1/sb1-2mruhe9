import React from 'react';
import CalculatorSection from '../../components/calculator/CalculatorSection';
import CurrencyInput from '../../components/CurrencyInput';
import PercentageInput from '../../components/PercentageInput';
import YearInput from '../../components/YearInput';

interface CalculatorFormProps {
  state: {
    loanAmount: string;
    interestRate: string;
    loanTerm: string;
    extraPayment: string;
    propertyTax: string;
    insurance: string;
  };
  updateField: (field: string, value: string) => void;
}

const CalculatorForm = ({ state, updateField }: CalculatorFormProps) => {
  return (
    <>
      <CalculatorSection title="Loan Details">
        <CurrencyInput
          label="Loan Amount"
          value={state.loanAmount}
          onChange={(value) => updateField('loanAmount', value)}
          placeholder="Enter loan amount"
          id="loan-amount"
        />
        <PercentageInput
          label="Interest Rate"
          value={state.interestRate}
          onChange={(value) => updateField('interestRate', value)}
          placeholder="Enter interest rate"
          id="interest-rate"
        />
        <YearInput
          label="Loan Term"
          value={state.loanTerm}
          onChange={(value) => updateField('loanTerm', value)}
          placeholder="Enter loan term in years"
          id="loan-term"
        />
      </CalculatorSection>

      <CalculatorSection title="Additional Payments">
        <CurrencyInput
          label="Extra Monthly Payment"
          value={state.extraPayment}
          onChange={(value) => updateField('extraPayment', value)}
          placeholder="Enter extra monthly payment"
          id="extra-payment"
        />
      </CalculatorSection>

      <CalculatorSection title="Additional Costs">
        <PercentageInput
          label="Property Tax Rate"
          value={state.propertyTax}
          onChange={(value) => updateField('propertyTax', value)}
          placeholder="Enter property tax rate"
          id="property-tax"
        />
        <CurrencyInput
          label="Annual Insurance"
          value={state.insurance}
          onChange={(value) => updateField('insurance', value)}
          placeholder="Enter annual insurance"
          id="insurance"
        />
      </CalculatorSection>
    </>
  );
};

export default CalculatorForm;