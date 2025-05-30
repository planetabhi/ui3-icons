
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Ai: React.FC<IconProps> = ({
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
    <path fill="#000" d="m4.7 4.7.315-1.26c.126-.505.844-.505.97 0L6.3 4.7l1.26.315c.505.126.505.844 0 .97L6.3 6.3l-.315 1.26c-.126.505-.844.505-.97 0L4.7 6.3l-1.26-.315c-.505-.126-.505-.844 0-.97z"/><path fill="#000" fill-rule="evenodd" d="m9.191 9.191 1.117-3.908c.486-1.702 2.898-1.702 3.384 0l1.117 3.908 3.908 1.117c1.702.486 1.702 2.898 0 3.384L14.81 14.81l-1.117 3.908c-.486 1.702-2.898 1.702-3.384 0L9.19 14.81l-3.908-1.117c-1.702-.486-1.702-2.898 0-3.384zm.809.81 1.27-4.443c.21-.735 1.25-.735 1.46 0L14 10l4.442 1.27c.735.21.735 1.25 0 1.46L14 14l-1.27 4.442c-.21.735-1.25.735-1.46 0L10 14l-4.442-1.27c-.735-.21-.735-1.25 0-1.46z" clip-rule="evenodd"/><path fill="#000" d="M18.015 16.44 17.7 17.7l-1.26.315c-.505.126-.505.844 0 .97l1.26.315.315 1.26c.126.505.844.505.97 0l.315-1.26 1.26-.315c.505-.126.505-.844 0-.97L19.3 17.7l-.315-1.26c-.126-.505-.844-.505-.97 0"/>
  </svg>
);

export default Ai;
