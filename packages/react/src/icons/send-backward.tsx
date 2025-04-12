
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const SendBackward: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M17 16.5a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1 0-3h8a1.5 1.5 0 0 1 1.5 1.5m-1.5.5a.5.5 0 0 0 0-1h-8a.5.5 0 0 0 0 1zm-3.646-3.146a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L11 12.293V9H7.5a1.5 1.5 0 1 1 0-3h8a1.5 1.5 0 0 1 0 3H12v3.293l1.146-1.147a.5.5 0 0 1 .708.708zM16 7.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 .5.5" clip-rule="evenodd"/>
  </svg>
);

export default SendBackward;
