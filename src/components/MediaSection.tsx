import React from 'react';
import { getImageUrl } from '../utils/images';

interface MediaSectionProps {
  imageSrc: string;
  altText: string;
  position?: 'left' | 'right';
  overlay?: boolean;
  height?: 'small' | 'medium' | 'large';
}

const MediaSection: React.FC<MediaSectionProps> = ({ 
  imageSrc, 
  altText, 
  position = 'right',
  overlay = false,
  height = 'medium'
}) => {
  const heightClasses = {
    small: 'h-32 md:h-48',
    medium: 'h-48 md:h-64',
    large: 'h-64 md:h-96',
  };

  return (
    <div className={`relative ${overlay ? 'h-full' : heightClasses[height]} rounded-lg overflow-hidden`}>
      <img
        src={getImageUrl(imageSrc)}
        alt={altText}
        className={`w-full h-full object-cover ${
          overlay ? 'absolute inset-0' : ''
        }`}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-navy-900/40" />
      )}
    </div>
  );
};

export default MediaSection;