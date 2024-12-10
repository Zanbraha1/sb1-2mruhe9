import React from 'react';
import MediaSection from '../MediaSection';

interface CalculatorFooterProps {
  imageSrc: string;
  altText: string;
}

const CalculatorFooter: React.FC<CalculatorFooterProps> = ({
  imageSrc,
  altText,
}) => {
  return (
    <div className="mt-12">
      <MediaSection
        imageSrc={imageSrc}
        altText={altText}
        height="medium"
        position="left"
      />
    </div>
  );
};

export default CalculatorFooter;