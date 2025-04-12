
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Slides: React.FC<IconProps> = ({
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
    <path fill="#000" d="M6 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/><path fill="#000" fill-rule="evenodd" d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1.982l.945 2.31a.5.5 0 0 1-.926.38l-1.1-2.69H8.063l-1.1 2.69a.5.5 0 1 1-.926-.379L6.982 17H5a2 2 0 0 1-2-2zm2-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1" clip-rule="evenodd"/>
  </svg>
);

export default Slides;
