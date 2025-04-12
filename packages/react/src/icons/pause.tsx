
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Pause: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  title,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    aria-hidden={title ? 'false' : 'true'}
    {...props}
  >
    {title && <title>{title}</title>}
    <path fill="#000" fill-rule="evenodd" d="M4 6a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1h2.5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m7.5 1a2 2 0 0 1 2-2H18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2.5a2 2 0 0 1-2-2zm2-1H18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" clip-rule="evenodd"/>
  </svg>
);

export default Pause;
