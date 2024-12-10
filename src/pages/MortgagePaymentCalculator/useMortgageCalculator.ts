import { useCalculatorState } from '../../utils/hooks/useCalculatorState';
import { useCalculatorResults } from '../../utils/hooks/useCalculatorResults';

const initialState = {
  loanAmount: '300000',
  interestRate: '6.5',
  loanTerm: '30',
  extraPayment: '0',
  propertyTax: '1.2',
  insurance: '1200',
};

export const useMortgageCalculator = () => {
  const { state, updateField } = useCalculatorState(initialState);

  const calculateResults = () => {
    const principal = Number(state.loanAmount);
    const monthlyRate = Number(state.interestRate) / 100 / 12;
    const numberOfPayments = Number(state.loanTerm) * 12;
    const monthlyExtra = Number(state.extraPayment);

    // Calculate base monthly payment (P&I)
    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    // Calculate additional costs
    const monthlyTax = (principal * (Number(state.propertyTax) / 100)) / 12;
    const monthlyInsurance = Number(state.insurance) / 12;

    // Calculate loan payoff with extra payments
    let balance = principal;
    let actualPayments = 0;
    let totalInterest = 0;
    let monthlyWithExtra = monthlyPayment + monthlyExtra;

    while (balance > 0 && actualPayments < numberOfPayments) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = monthlyWithExtra - interestPayment;
      
      totalInterest += interestPayment;
      balance -= principalPayment;
      actualPayments++;
      
      if (balance < 0) balance = 0;
    }

    const yearsToPayoff = actualPayments / 12;
    const monthsSaved = numberOfPayments - actualPayments;
    const interestSaved = (monthlyPayment * numberOfPayments) - (principal + totalInterest);

    return {
      monthlyPI: monthlyPayment,
      monthlyTax,
      monthlyInsurance,
      totalMonthly: monthlyPayment + monthlyTax + monthlyInsurance,
      totalWithExtra: monthlyPayment + monthlyTax + monthlyInsurance + monthlyExtra,
      yearsToPayoff,
      monthsSaved,
      interestSaved,
    };
  };

  const results = useCalculatorResults(calculateResults, [
    state.loanAmount,
    state.interestRate,
    state.loanTerm,
    state.extraPayment,
    state.propertyTax,
    state.insurance,
  ]);

  return {
    state,
    updateField,
    results,
  };
};