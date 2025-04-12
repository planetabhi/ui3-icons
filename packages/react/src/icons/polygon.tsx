
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Polygon: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M12.65 3.625a.75.75 0 0 0-1.3 0l-8.227 14.25A.75.75 0 0 0 3.773 19h16.454a.75.75 0 0 0 .65-1.125zM12 4.5 4.206 18h15.588z" clip-rule="evenodd"/>
  </svg>
);

export default Polygon;
