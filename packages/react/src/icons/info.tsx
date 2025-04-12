
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Info: React.FC<IconProps> = ({
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
    <path fill="#000" d="M12.75 9.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.25 2.25a.5.5 0 0 0-1 0V15a.5.5 0 0 0 1 0z"/><path fill="#000" fill-rule="evenodd" d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-1a6 6 0 1 0 0-12 6 6 0 0 0 0 12" clip-rule="evenodd"/>
  </svg>
);

export default Info;
