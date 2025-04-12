
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Toggle: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M7 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M5 12a5 5 0 0 1 5-5h4a5 5 0 0 1 0 10h-4a5 5 0 0 1-5-5m5-4h4a4 4 0 0 1 0 8h-4a4 4 0 0 1 0-8" clip-rule="evenodd"/>
  </svg>
);

export default Toggle;
