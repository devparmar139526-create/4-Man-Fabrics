import React from 'react';

const ShinyText = ({ 
  text, 
  baseColor = '#1A4536', 
  className = '' 
}) => {
  return (
    <span 
      className={`
        inline-block
        align-baseline
        bg-clip-text 
        text-transparent 
        animate-shine-fast
        ${className}
      `}
      style={{
        // Subtle light reflection: base color → slight highlight → base color
        // Using 65% opacity for the highlight to maintain readability
        backgroundImage: `linear-gradient(110deg, ${baseColor} 0%, ${baseColor} 35%, rgba(255,255,255,0.65) 50%, ${baseColor} 65%, ${baseColor} 100%)`,
        backgroundSize: '250% 100%',
        color: baseColor,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        // Fallback for browsers that don't support bg-clip
        filter: 'contrast(1.1) brightness(1.05)',
        lineHeight: '1',
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
