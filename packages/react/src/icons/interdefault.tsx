
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Interdefault: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1 0a6 6 0 0 1-9.874 4.581l8.455-8.455A5.98 5.98 0 0 1 18 12M7.418 15.874l8.456-8.456a6 6 0 0 0-8.456 8.456" clip-rule="evenodd"/>
  </svg>
);

export default Interdefault;
