
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Filter: React.FC<IconProps> = ({
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
    <path fill="#000" d="M9.5 12a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm.5 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M8.5 9a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1z"/><path fill="#000" fill-rule="evenodd" d="M4.1 12a7.9 7.9 0 1 1 15.8 0 7.9 7.9 0 0 1-15.8 0m7.9 6.9a6.9 6.9 0 1 1 0-13.8 6.9 6.9 0 0 1 0 13.8" clip-rule="evenodd"/>
  </svg>
);

export default Filter;
