
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Save: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M15.293 20.793c.63.63 1.707.184 1.707-.707V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v15.086c0 .89 1.077 1.337 1.707.707L12 17.5zM12 16.086l4 4V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v15.086z" clip-rule="evenodd"/>
  </svg>
);

export default Save;
