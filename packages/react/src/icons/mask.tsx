
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Mask: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M14 16a6 6 0 0 1-6-6h-.5a.5.5 0 0 1 0-1h.583A6.002 6.002 0 0 1 20 10a6 6 0 0 1-5 5.917v.583a.5.5 0 0 1-1 0zm0-5v4a5 5 0 0 1-5-5h4a1 1 0 0 1 1 1m0-6a5 5 0 0 0-4.9 4H13a2 2 0 0 1 2 2v3.9A5.002 5.002 0 0 0 14 5" clip-rule="evenodd"/><path fill="#000" d="M5.5 10a.5.5 0 0 0-.5.5.5.5 0 0 1-1 0A1.5 1.5 0 0 1 5.5 9a.5.5 0 0 1 0 1m-1 8a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 4 18.5a.5.5 0 0 1 .5-.5m10 0a.5.5 0 0 1 .5.5 1.5 1.5 0 0 1-1.5 1.5.5.5 0 0 1 0-1 .5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5M5 12.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm0 3a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zM7.5 19a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
  </svg>
);

export default Mask;
