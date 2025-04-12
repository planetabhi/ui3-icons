
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Arrow: React.FC<IconProps> = ({
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
    <path fill="#000" d="M12.5 4.5A.5.5 0 0 1 13 4h6.5a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-1 0V5.707L4.854 19.854a.5.5 0 0 1-.708-.708L18.293 5H13a.5.5 0 0 1-.5-.5"/>
  </svg>
);

export default Arrow;
