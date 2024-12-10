import { useState, useCallback } from 'react';
import { isValidNumber, isValidPercentage, isValidCurrency } from '../utils/validation';

interface CalculatorState {
  [key: string]: string;
}

interface ValidationRules {
  [key: string]: (value: string) => boolean;
}

export const useCalculator = (
  initialState: CalculatorState,
  validationRules: ValidationRules
) => {
  const [state, setState] = useState(initialState);

  const updateField = useCallback((field: string, value: string) => {
    if (validationRules[field] && !validationRules[field](value)) {
      return;
    }
    setState(prev => ({ ...prev, [field]: value }));
  }, [validationRules]);

  return {
    state,
    updateField,
  };
};