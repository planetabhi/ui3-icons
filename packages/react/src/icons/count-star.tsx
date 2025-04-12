
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const CountStar: React.FC<IconProps> = ({
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
    <path fill="#000" d="M12.5 6a.5.5 0 0 0-1 0v4.793l-3.389-3.39a.5.5 0 0 0-.707.708l3.389 3.389H6a.5.5 0 0 0 0 1h4.793l-3.39 3.39a.5.5 0 1 0 .708.706l3.389-3.389V18a.5.5 0 0 0 1 0v-4.793l3.39 3.39a.5.5 0 1 0 .706-.708L13.207 12.5H18a.5.5 0 0 0 0-1h-4.793l3.39-3.39a.5.5 0 1 0-.708-.706L12.5 10.793z"/>
  </svg>
);

export default CountStar;
