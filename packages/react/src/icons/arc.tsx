
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Arc: React.FC<IconProps> = ({
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
    <path fill="#000" d="M7 12a5 5 0 0 1 5-5 .5.5 0 0 0 0-1 6 6 0 1 0 6 6 .5.5 0 0 0-1 0 5 5 0 0 1-10 0"/><path fill="#000" d="M9.5 12A2.5 2.5 0 0 1 12 9.5a.5.5 0 0 0 0-1 3.5 3.5 0 1 0 3.5 3.5.5.5 0 0 0-1 0 2.5 2.5 0 0 1-5 0"/>
  </svg>
);

export default Arc;
