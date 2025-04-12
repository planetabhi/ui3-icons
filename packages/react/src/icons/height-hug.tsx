
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const HeightHug: React.FC<IconProps> = ({
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
    <path fill="#000" d="M14.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.707 0l-3-3a.5.5 0 0 1 .707-.708L11.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0m0 9.708a.5.5 0 0 1-.708 0L11.5 14.207l-2.646 2.647a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708"/>
  </svg>
);

export default HeightHug;
