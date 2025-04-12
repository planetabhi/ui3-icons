
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Itc: React.FC<IconProps> = ({
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
    <path fill="#000" d="M10 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-2.083L11.6 17h1.9a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2.083L12.4 7h-1.9a.5.5 0 0 1-.5-.5"/>
  </svg>
);

export default Itc;
