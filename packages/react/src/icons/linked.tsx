
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Linked: React.FC<IconProps> = ({
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
    <path fill="#000" d="M16 7H8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 0 1H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-1 0V8a1 1 0 0 0-1-1"/><path fill="#000" d="M15.086 12.586a2 2 0 1 1 2.828 2.828.5.5 0 0 0 .707.707 3 3 0 0 0-4.242-4.242.5.5 0 0 0 .707.707m-2.5 2.5a.5.5 0 0 0-.707-.707 3 3 0 0 0 4.242 4.242.5.5 0 0 0-.707-.707 2 2 0 1 1-2.828-2.828"/><path fill="#000" d="M16.854 13.646a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708l2.5-2.5a.5.5 0 0 1 .708 0"/>
  </svg>
);

export default Linked;
