export const LOAN_TYPES = {
  CONVENTIONAL: 'conventional',
  FHA: 'fha',
  VA: 'va',
  USDA: 'usda',
} as const;

export const DEFAULT_VALUES = {
  HOME_PRICE: '300000',
  DOWN_PAYMENT: '20',
  INTEREST_RATE: '6.5',
  LOAN_TERM: '30',
  PROPERTY_TAX: '1.2',
  INSURANCE: '1200',
  APPRECIATION: '3.5',
} as const;

export const ATHENS_MARKET = {
  AVG_PRICE_PER_SQFT: 200,
  AVG_PROPERTY_TAX_RATE: 1.2,
  AVG_INSURANCE_COST: 1200,
  AVG_APPRECIATION: 3.5,
} as const;