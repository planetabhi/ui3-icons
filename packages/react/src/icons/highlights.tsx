
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Highlights: React.FC<IconProps> = ({
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
    <path fill="#000" fill-opacity=".3" d="M7 12a5 5 0 0 0 4 4.9V7.1A5 5 0 0 0 7 12"/><path fill="#000" fill-rule="evenodd" d="M11.998 19.938a8.001 8.001 0 0 0 0-15.876C11.45 3.993 11 4.448 11 5v1.083a6.002 6.002 0 0 0 0 11.834V19c0 .552.45 1.007.998.938M18 12a7 7 0 0 1-6 6.93V5.07c3.392.485 6 3.404 6 6.93m-7 4.9a5.002 5.002 0 0 1 0-9.8z" clip-rule="evenodd"/>
  </svg>
);

export default Highlights;
