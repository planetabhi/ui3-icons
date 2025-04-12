
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const VersionMerged: React.FC<IconProps> = ({
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
    <path fill="#000" d="M11.646 6.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L12.5 7.707v3.824A4 4 0 0 1 16 15.5v2a.5.5 0 0 1-1 0v-2a3 3 0 1 0-6 0v2a.5.5 0 0 1-1 0v-2a4 4 0 0 1 3.5-3.97V7.708l-1.146 1.147a.5.5 0 0 1-.708-.708z"/>
  </svg>
);

export default VersionMerged;
