
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Styles: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M8.5 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m7 1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M13 15.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m1 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M8.5 18a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" clip-rule="evenodd"/>
  </svg>
);

export default Styles;
