
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const HeightFill: React.FC<IconProps> = ({
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
    <path fill="#000" d="M14.854 14.146a.5.5 0 0 1 0 .707l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.707L11 16.293V7.707L8.854 9.854a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L12 7.707v8.586l2.146-2.147a.5.5 0 0 1 .708 0"/>
  </svg>
);

export default HeightFill;
