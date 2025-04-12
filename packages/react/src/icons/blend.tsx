
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Blend: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M12 17a4 4 0 0 0 4-4c0-2.17-2.093-5.387-3.251-7a.913.913 0 0 0-1.498 0C10.093 7.612 8 10.83 8 13a4 4 0 0 0 4 4m0-1a3 3 0 0 0 3-3c0-.826-.42-1.989-1.078-3.246C13.308 8.581 12.56 7.457 12 6.672c-.56.785-1.309 1.909-1.922 3.082C9.42 11.011 9 12.174 9 13a3 3 0 0 0 3 3" clip-rule="evenodd"/>
  </svg>
);

export default Blend;
