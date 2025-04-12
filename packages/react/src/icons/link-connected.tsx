
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const LinkConnected: React.FC<IconProps> = ({
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
    <path fill="#000" d="M10 8a2 2 0 1 1 4 0v1.5a.5.5 0 0 0 1 0V8a3 3 0 1 0-6 0v1.5a.5.5 0 0 0 1 0zm0 8a2 2 0 1 0 4 0v-1.5a.5.5 0 0 1 1 0V16a3 3 0 1 1-6 0v-1.5a.5.5 0 0 1 1 0z"/><path fill="#000" d="M12.5 10a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0z"/>
  </svg>
);

export default LinkConnected;
