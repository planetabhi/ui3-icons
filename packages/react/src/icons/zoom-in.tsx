
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const ZoomIn: React.FC<IconProps> = ({
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
    <path fill="#000" d="M11 8.5a.5.5 0 0 0-1 0V10H8.5a.5.5 0 0 0 0 1H10v1.5a.5.5 0 1 0 1 0V11h1.5a.5.5 0 1 0 0-1H11z"/><path fill="#000" fill-rule="evenodd" d="M10.5 16a5.48 5.48 0 0 0 3.544-1.294.5.5 0 0 0 .103.148l3 3a.5.5 0 0 0 .707-.707l-3-3a.5.5 0 0 0-.148-.103A5.5 5.5 0 1 0 10.5 16m0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9" clip-rule="evenodd"/>
  </svg>
);

export default ZoomIn;
