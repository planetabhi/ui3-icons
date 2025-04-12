
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const AutoRename: React.FC<IconProps> = ({
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
    <path fill="#000" d="M11 5.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H14v12h1.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1H13V6h-1.5a.5.5 0 0 1-.5-.5"/><path fill="#000" d="M18 9.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 19 9.5v5a1.5 1.5 0 0 1-1.5 1.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 0 .5-.5zM6 11a.5.5 0 0 0-1 0v3.5A1.5 1.5 0 0 0 6.5 16h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 1-.5-.5zm2.015-4.56L7.7 7.7l-1.26.315c-.505.126-.505.844 0 .97L7.7 9.3l.315 1.26c.126.505.844.505.97 0L9.3 9.3l1.26-.315c.505-.126.505-.844 0-.97L9.3 7.7l-.315-1.26c-.126-.505-.844-.505-.97 0"/>
  </svg>
);

export default AutoRename;
