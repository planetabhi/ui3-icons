
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const GoTo: React.FC<IconProps> = ({
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
    <path fill="#000" d="M13.5 6a.5.5 0 1 0 0 1h2.793l-4.647 4.646a.5.5 0 0 0 .707.708L17 7.707V10.5a.5.5 0 1 0 1 0V7a1 1 0 0 0-1-1z"/><path fill="#000" d="M10.854 7.146a.5.5 0 0 1 0 .708L6.707 12 12 17.293l4.146-4.147a.5.5 0 0 1 .707.708L12.708 18a1 1 0 0 1-1.414 0L6 12.707a1 1 0 0 1 0-1.414l4.146-4.147a.5.5 0 0 1 .707 0"/>
  </svg>
);

export default GoTo;
