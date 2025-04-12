
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const OverlayLeft: React.FC<IconProps> = ({
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
    <path fill="#000" fill-opacity=".3" d="M6 6a2 2 0 0 1 2-2h4v16H8a2 2 0 0 1-2-2z"/><path fill="#000" fill-rule="evenodd" d="M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm6-1h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-4zm-1 0H8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3z" clip-rule="evenodd"/>
  </svg>
);

export default OverlayLeft;
