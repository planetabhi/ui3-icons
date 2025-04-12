
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Contrast: React.FC<IconProps> = ({
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
    <path fill="#000" fill-opacity=".3" fill-rule="evenodd" d="M12 19a6.97 6.97 0 0 0 4.584-1.71L6.709 7.417A7 7 0 0 0 12 19m-4-5a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1z" clip-rule="evenodd"/><path fill="#000" d="M7.5 14.5A.5.5 0 0 1 8 14h3a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5M15 8a.5.5 0 0 0-1 0v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1z"/><path fill="#000" fill-rule="evenodd" d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-3.416 5.29A7 7 0 0 1 6.71 7.417zm.707-.706L7.416 6.709a7 7 0 0 1 9.874 9.874" clip-rule="evenodd"/>
  </svg>
);

export default Contrast;
