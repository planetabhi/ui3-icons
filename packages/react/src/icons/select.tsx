
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Select: React.FC<IconProps> = ({
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
    <path fill="#000" d="M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path fill="#000" fill-rule="evenodd" d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-1a6 6 0 1 0 0-12 6 6 0 0 0 0 12" clip-rule="evenodd"/>
  </svg>
);

export default Select;
