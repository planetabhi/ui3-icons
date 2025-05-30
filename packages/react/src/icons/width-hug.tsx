
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const WidthHug: React.FC<IconProps> = ({
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
    <path fill="#000" d="M7.146 8.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .707l-3 3a.5.5 0 1 1-.708-.707L9.793 11.5 7.146 8.854a.5.5 0 0 1 0-.708m9.708 0a.5.5 0 0 1 0 .708L14.207 11.5l2.647 2.646a.5.5 0 0 1-.708.707l-3-3a.5.5 0 0 1 0-.707l3-3a.5.5 0 0 1 .708 0"/>
  </svg>
);

export default WidthHug;
