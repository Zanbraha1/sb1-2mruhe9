export const CALCULATOR_IMAGES = {
  MORTGAGE: {
    HERO: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    CALCULATOR: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c',
    MODERN_HOME: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    LUXURY_HOME: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11',
    INTERIOR: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea',
  },
  HOME_BUYING: {
    EXTERIOR: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716',
    KEYS: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716',
    PAPERWORK: 'https://images.unsplash.com/photo-1560518883-b2275537fde2',
  },
  FINANCIAL: {
    CALCULATOR: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c',
    PLANNING: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f',
    DOCUMENTS: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f',
  },
  PROPERTY: {
    MODERN: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    LUXURY: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
    INTERIOR: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
  },
  INVESTMENT: {
    ANALYSIS: 'https://images.unsplash.com/photo-1543286386-713bdd548da4',
    GROWTH: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f',
    CHARTS: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  },
} as const;

export const getImageUrl = (image: string, width = 1920, quality = 80) => {
  return `${image}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${width}&q=${quality}`;
};