
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const MicMute: React.FC<IconProps> = ({
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
    <path fill="#000" d="M14 6v1.879l1-1V6a3 3 0 1 0-6 0v5c0 .54.143 1.048.393 1.486l.748-.748A2 2 0 0 1 10 11V6a2 2 0 1 1 4 0m.998 5.124-2.874 2.874a3 3 0 0 0 2.874-2.874M7 11.167c0 1.048.334 2.019.901 2.81l-.715.716A5.8 5.8 0 0 1 6 11.167V11a.5.5 0 0 1 1 0z"/><path fill="#000" d="m10.352 15.769-.777.778a5.8 5.8 0 0 0 1.925.444V20h-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-3v-3.01a5.833 5.833 0 0 0 5.5-5.823V11a.5.5 0 0 0-1 0v.167A4.833 4.833 0 0 1 12.167 16h-.334a4.8 4.8 0 0 1-1.48-.231m9.501-10.915a.5.5 0 0 0-.708-.708l-15 15a.5.5 0 0 0 .708.708z"/>
  </svg>
);

export default MicMute;
