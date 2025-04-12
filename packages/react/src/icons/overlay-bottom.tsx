
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const OverlayBottom: React.FC<IconProps> = ({
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
    <path fill="#000" fill-opacity=".3" d="M6 14h12v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"/><path fill="#000" fill-rule="evenodd" d="M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-1h8a1 1 0 0 1 1 1v8H7V6a1 1 0 0 1 1-1m9 10v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3z" clip-rule="evenodd"/>
  </svg>
);

export default OverlayBottom;
