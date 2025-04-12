
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Tablet: React.FC<IconProps> = ({
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
    <path fill="#000" d="M12 16a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/><path fill="#000" fill-rule="evenodd" d="M7 7.5A1.5 1.5 0 0 1 8.5 6h7A1.5 1.5 0 0 1 17 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 16.5zM8.5 7h7a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5" clip-rule="evenodd"/>
  </svg>
);

export default Tablet;
