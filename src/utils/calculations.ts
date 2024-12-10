// Financial calculation utilities
export const calculateLoanPayment = (principal: number, rate: number, years: number): number => {
  const monthlyRate = rate / 100 / 12;
  const numberOfPayments = years * 12;
  return (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
};

export const calculateMonthlyTax = (propertyValue: number, taxRate: number): number => {
  return (propertyValue * (taxRate / 100)) / 12;
};

export const calculateMonthlyInsurance = (annualInsurance: number): number => {
  return annualInsurance / 12;
};

export const formatCurrency = (value: number): string => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

export const calculateAppreciation = (
  initialValue: number,
  rate: number,
  years: number
): number => {
  return initialValue * Math.pow(1 + rate / 100, years);
};