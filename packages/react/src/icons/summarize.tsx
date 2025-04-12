
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Summarize: React.FC<IconProps> = ({
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
    <path fill="#000" d="M6.015 3.44 5.7 4.7l-1.26.315c-.505.126-.505.844 0 .97L5.7 6.3l.315 1.26c.126.505.844.505.97 0L7.3 6.3l1.26-.315c.505-.126.505-.844 0-.97L7.3 4.7l-.315-1.26c-.126-.505-.844-.505-.97 0m0 12L5.7 16.7l-1.26.315c-.505.126-.505.844 0 .97l1.26.315.315 1.26c.126.505.844.505.97 0L7.3 18.3l1.26-.315c.505-.126.505-.844 0-.97L7.3 16.7l-.315-1.26c-.126-.505-.844-.505-.97 0M5.7 10.7l.315-1.26c.126-.505.844-.505.97 0L7.3 10.7l1.26.315c.505.126.505.844 0 .97L7.3 12.3l-.315 1.26c-.126.505-.844.505-.97 0L5.7 12.3l-1.26-.315c-.505-.126-.505-.844 0-.97zM10.5 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 6a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 6a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/>
  </svg>
);

export default Summarize;
