
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const AlignBottom: React.FC<IconProps> = ({
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
    <path fill="#000" d="m14.854 13.854-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L11 15.293V7.5a.5.5 0 0 1 1 0v7.793l2.146-2.147a.5.5 0 0 1 .708.708M5.5 19a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1z"/>
  </svg>
);

export default AlignBottom;
