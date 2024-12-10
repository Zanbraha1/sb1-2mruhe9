import { useMemo } from 'react';
import { formatCurrency } from '../calculations';

export const useCalculatorResults = <T extends Record<string, number>>(
  calculate: () => T,
  dependencies: any[]
) => {
  return useMemo(() => {
    const results = calculate();
    return Object.entries(results).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: formatCurrency(value),
    }), {} as Record<string, string>);
  }, dependencies);
};