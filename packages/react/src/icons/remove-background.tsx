
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const RemoveBackground: React.FC<IconProps> = ({
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
    <path fill="#000" d="M17.015 4.44 16.7 5.7l-1.26.315c-.505.126-.505.844 0 .97l1.26.315.315 1.26c.126.505.844.505.97 0L18.3 7.3l1.26-.315c.505-.126.505-.844 0-.97L18.3 5.7l-.315-1.26c-.126-.505-.844-.505-.97 0"/><path fill="#000" fill-rule="evenodd" d="M10.354 11.146a.5.5 0 0 0-.708 0L7 13.793V12.5a.5.5 0 0 0-1 0v4A1.5 1.5 0 0 0 7.5 18h9a1.5 1.5 0 0 0 1.5-1.5.5.5 0 0 0-1 0 .5.5 0 0 1-.5.5h-.293zM7 16.5v-1.293l3-3L14.793 17H7.5a.5.5 0 0 1-.5-.5" clip-rule="evenodd"/><path fill="#000" d="M7.5 7a.5.5 0 0 0-.5.5.5.5 0 0 1-1 0A1.5 1.5 0 0 1 7.5 6a.5.5 0 0 1 0 1M9 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5M6.5 9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m11 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m0 3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m-4.146-4.354a.5.5 0 0 0-.708.708l.647.646-.647.646a.5.5 0 0 0 .708.708l.646-.647.646.647a.5.5 0 0 0 .708-.708L14.707 10l.647-.646a.5.5 0 0 0-.708-.708L14 9.293z"/>
  </svg>
);

export default RemoveBackground;
