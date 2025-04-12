import React from 'react';
import { IconCard } from './IconCard';
import { IconData } from '../types';

interface IconGridProps {
  icons: IconData[];
}

export const IconGrid: React.FC<IconGridProps> = ({ icons }) => {
  return (
    <div className="icon-grid">
      {icons.map((icon) => (
        <IconCard key={icon.name} icon={icon} />
      ))}
    </div>
  );
};