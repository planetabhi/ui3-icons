
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Outline: React.FC<IconProps> = ({
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
    <path fill="#000" d="m7.7 10.2.315-1.26c.126-.505.844-.505.97 0L9.3 10.2l1.26.315c.505.126.505.844 0 .97L9.3 11.8l-.315 1.26c-.126.505-.844.505-.97 0L7.7 11.8l-1.26-.315c-.505-.126-.505-.844 0-.97zM12.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/><path fill="#000" fill-rule="evenodd" d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1.982l.945 2.31a.5.5 0 0 1-.926.38l-1.1-2.69H8.063l-1.1 2.69a.5.5 0 1 1-.926-.379L6.982 17H5a2 2 0 0 1-2-2zm2-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1" clip-rule="evenodd"/>
  </svg>
);

export default Outline;
