import React from 'react';
import MediaSection from '../MediaSection';

interface CalculatorHeaderProps {
  imageSrc: string;
  title: string;
  description: string;
}

const CalculatorHeader: React.FC<CalculatorHeaderProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="mb-8">
      <MediaSection
        imageSrc={imageSrc}
        altText={title}
        height="large"
        overlay={true}
      />
      <div className="relative -mt-24 z-10 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl max-w-2xl mx-auto">{description}</p>
      </div>
    </div>
  );
};

export default CalculatorHeader;