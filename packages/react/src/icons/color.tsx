
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Color: React.FC<IconProps> = ({
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
    <path fill="#000" d="M13 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-4.134 3.5a1 1 0 1 0-1.732-1 1 1 0 0 0 1.732 1m7.634.366a1 1 0 1 1-1-1.732 1 1 0 0 1 1 1.732M7.134 15.5a1 1 0 1 0 1.732-1 1 1 0 0 0-1.732 1"/><path fill="#000" fill-rule="evenodd" d="M18.364 5.636a8.96 8.96 0 0 1 2.535 5.016C21.206 12.688 19.4 14 17.73 14H15.5a1.5 1.5 0 0 0-1.5 1.5v2.231c0 1.67-1.312 3.475-3.348 3.168a9 9 0 1 1 7.712-15.263m1.546 5.165c.188 1.246-.918 2.199-2.179 2.199H15.5a2.5 2.5 0 0 0-2.5 2.5v2.231c0 1.26-.953 2.367-2.2 2.18a8 8 0 1 1 9.11-9.11" clip-rule="evenodd"/>
  </svg>
);

export default Color;
