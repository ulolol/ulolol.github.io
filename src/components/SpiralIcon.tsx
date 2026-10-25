import React from 'react';

interface SpiralIconProps {
  className?: string;
}

/**
 * Authentic Poké-Spiraled Emblem (Poliwhirl / Uzumaki Archimedean Spiral)
 * Replaces generic stars to match the gaming & Pokémon architectural aesthetic.
 */
export const SpiralIcon: React.FC<SpiralIconProps> = ({ className = 'w-3.5 h-3.5' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 12a1 1 0 0 1 1 1c0 1.1-.9 2-2 2a3 3 0 0 1-3-3c0-2.2 1.8-4 4-4a5 5 0 0 1 5 5c0 3.3-2.7 6-6 6a7 7 0 0 1-7-7c0-4.4 3.6-8 8-8a9 9 0 0 1 9 9" />
    </svg>
  );
};

export default SpiralIcon;
