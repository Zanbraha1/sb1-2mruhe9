export const isValidNumber = (value: string): boolean => {
  return !isNaN(Number(value)) && Number(value) >= 0;
};

export const isValidPercentage = (value: string): boolean => {
  const num = Number(value);
  return !isNaN(num) && num >= 0 && num <= 100;
};

export const isValidCurrency = (value: string): boolean => {
  return !isNaN(Number(value)) && Number(value) >= 0;
};

export const sanitizeNumber = (value: string): string => {
  return value.replace(/[^0-9.]/g, '');
};