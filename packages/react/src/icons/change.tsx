
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Change: React.FC<IconProps> = ({
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
    <path fill="#000" d="M15.862 8.824a5 5 0 0 0-8.838 2.69.5.5 0 1 1-.996-.096A6 6 0 0 1 17 8.683V6.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H16a5 5 0 0 0-.138-.176m1.661 3.212a.5.5 0 0 1 .449.546A6 6 0 0 1 7 15.317V17.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 1 1 0 1H8q.067.09.138.176a5 5 0 0 0 8.838-2.691.5.5 0 0 1 .547-.45"/>
  </svg>
);

export default Change;
