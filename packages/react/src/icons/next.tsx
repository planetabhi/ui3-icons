
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Next: React.FC<IconProps> = ({
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
    <path fill="#000" d="M15.146 7.147a.5.5 0 0 0 0 .708L17.293 10H8.5a3.5 3.5 0 1 0 0 7h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h8.793l-2.147 2.146a.5.5 0 0 0 .708.707l3-3a.5.5 0 0 0 0-.706l-3-3a.5.5 0 0 0-.708 0"/>
  </svg>
);

export default Next;
