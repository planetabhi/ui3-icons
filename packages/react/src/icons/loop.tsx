
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Loop: React.FC<IconProps> = ({
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
    <path fill="#000" d="M9.854 6.146a.5.5 0 1 0-.708.708L10.293 8H9a4 4 0 1 0 0 8h.5a.5.5 0 0 0 0-1H9a3 3 0 1 1 0-6h1.293l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708zM14.5 8a.5.5 0 0 0 0 1h.5a3 3 0 1 1 0 6h-1.293l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L13.707 16H15a4 4 0 0 0 0-8z"/>
  </svg>
);

export default Loop;
