import { useState, useCallback } from 'react';
import { sanitizeNumber } from '../validation';

interface CalculatorState {
  [key: string]: string;
}

export const useCalculatorState = (initialState: CalculatorState) => {
  const [state, setState] = useState(initialState);

  const updateField = useCallback((field: string, value: string) => {
    const sanitizedValue = sanitizeNumber(value);
    setState(prev => ({ ...prev, [field]: sanitizedValue }));
  }, []);

  return {
    state,
    updateField,
  };
};