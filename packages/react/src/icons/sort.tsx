
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Sort: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M4 5.5A1.5 1.5 0 0 1 5.5 4h4A1.5 1.5 0 0 1 11 5.5v4A1.5 1.5 0 0 1 9.5 11h-4A1.5 1.5 0 0 1 4 9.5zM5.5 5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5" clip-rule="evenodd"/><path fill="#000" d="M16.015 13.44 15.5 15.5l-2.06.515c-.505.126-.505.844 0 .97l2.06.515.515 2.06c.126.505.844.505.97 0l.515-2.06 2.06-.515c.505-.126.505-.844 0-.97L17.5 15.5l-.515-2.06c-.126-.505-.844-.505-.97 0"/><path fill="#000" fill-rule="evenodd" d="M5.5 13A1.5 1.5 0 0 0 4 14.5v4A1.5 1.5 0 0 0 5.5 20h4a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 9.5 13zm4 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5M13 5.5A1.5 1.5 0 0 1 14.5 4h4A1.5 1.5 0 0 1 20 5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 13 9.5zm1.5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5" clip-rule="evenodd"/>
  </svg>
);

export default Sort;
