
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const ScreenShare: React.FC<IconProps> = ({
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
    <path fill="#000" d="M5 6.5A1.5 1.5 0 0 1 6.5 5h11A1.5 1.5 0 0 1 19 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-2a.5.5 0 0 0 0 1h2a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 17.5 4h-11A2.5 2.5 0 0 0 4 6.5v2a.5.5 0 0 0 1 0z"/><path fill="#000" d="M11 8.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V9.707l-6.146 6.147a.5.5 0 0 1-.708-.708L14.293 9H11.5a.5.5 0 0 1-.5-.5"/><path fill="#000" d="M4 11.5A1.5 1.5 0 0 1 5.5 10h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 4 18.5z"/>
  </svg>
);

export default ScreenShare;
