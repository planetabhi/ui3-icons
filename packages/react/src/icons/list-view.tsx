
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const ListView: React.FC<IconProps> = ({
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
    <path fill="#000" d="M6 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0m4.5-.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 10a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0-5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zM6 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
  </svg>
);

export default ListView;
