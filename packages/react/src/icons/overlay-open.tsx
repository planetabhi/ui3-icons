
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const OverlayOpen: React.FC<IconProps> = ({
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
    <path fill="#000" d="M15.5 13.5a.5.5 0 0 0-1 0v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1z"/><path fill="#000" fill-rule="evenodd" d="M17 8v3.535A4 4 0 1 1 11.535 17H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2M8 7h7a1 1 0 0 1 1 1v3.126A4 4 0 0 0 11.126 16H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1m8 5.17a3 3 0 0 1 1 .594 3 3 0 1 1-1-.593" clip-rule="evenodd"/>
  </svg>
);

export default OverlayOpen;
