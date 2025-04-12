
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Pencil: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M3.008 4.124a1 1 0 0 1 1.116-1.116l4 .5a1 1 0 0 1 .583.285L20.5 15.586a2 2 0 0 1 0 2.828L18.414 20.5a2 2 0 0 1-2.828 0L3.793 8.707a1 1 0 0 1-.285-.583zM4 4l.5 4 9.146 9.146 3.5-3.5L8 4.5zm13.854 10.353-3.5 3.5 1.939 1.94a1 1 0 0 0 1.414 0l2.086-2.086a1 1 0 0 0 0-1.414z" clip-rule="evenodd"/>
  </svg>
);

export default Pencil;
