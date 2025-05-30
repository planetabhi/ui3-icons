
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const NumberList: React.FC<IconProps> = ({
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
    <path fill="#000" d="M11 7a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6A.5.5 0 0 1 11 7M6 7a.5.5 0 0 1 .5-.5h1A.5.5 0 0 1 8 7v3.5a.5.5 0 1 1-1 0v-3h-.5A.5.5 0 0 1 6 7m0 6.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.276.447L7 16.31v.191h1.5a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 6 17v-1a.5.5 0 0 1 .276-.447L8 14.69V14H6.5a.5.5 0 0 1-.5-.5m5.5 3a.5.5 0 1 0 0 1h6a.5.5 0 0 0 0-1zm0-5a.5.5 0 1 0 0 1h6a.5.5 0 0 0 0-1z"/>
  </svg>
);

export default NumberList;
