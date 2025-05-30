
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Check: React.FC<IconProps> = ({
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
    <path fill="#000" d="M15.252 8.568a.5.5 0 0 1 .18.684l-3.5 6a.5.5 0 0 1-.816.068l-2.5-3a.5.5 0 0 1 .768-.64l2.043 2.452 3.141-5.384a.5.5 0 0 1 .684-.18"/>
  </svg>
);

export default Check;
