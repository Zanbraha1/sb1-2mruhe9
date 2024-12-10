export interface CalculatorProps {
  title: string;
  description: string;
  blogContent: string;
}

export interface CalculatorResults {
  [key: string]: string;
}

export interface MediaSectionProps {
  imageSrc: string;
  altText: string;
  position?: 'left' | 'right';
  overlay?: boolean;
}