
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Inspect: React.FC<IconProps> = ({
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
    <path fill="#000" d="M5 6.5A1.5 1.5 0 0 1 6.5 5h10A1.5 1.5 0 0 1 18 6.5v5a.5.5 0 0 0 1 0v-5A2.5 2.5 0 0 0 16.5 4h-10A2.5 2.5 0 0 0 4 6.5v10A2.5 2.5 0 0 0 6.5 19h5a.5.5 0 0 0 0-1h-5A1.5 1.5 0 0 1 5 16.5z"/><path fill="#000" fill-rule="evenodd" d="M20.294 16.099a1 1 0 0 0 .072-1.887l-8-3.143a1 1 0 0 0-1.297 1.297l3.143 8a1 1 0 0 0 1.887-.072l.987-3.208zm-4.008.187L15.143 20 12 12l8 3.143z" clip-rule="evenodd"/>
  </svg>
);

export default Inspect;
