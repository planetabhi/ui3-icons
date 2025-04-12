
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Back: React.FC<IconProps> = ({
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
    <path fill="#000" d="M8.854 7.146a.5.5 0 0 1 0 .708L6.707 10H15.5a3.5 3.5 0 1 1 0 7h-1a.5.5 0 1 1 0-1h1a2.5 2.5 0 0 0 0-5H6.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.707l3-3a.5.5 0 0 1 .708 0"/>
  </svg>
);

export default Back;
