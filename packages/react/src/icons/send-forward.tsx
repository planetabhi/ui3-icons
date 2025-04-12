
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const SendForward: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M6 7.5A1.5 1.5 0 0 1 7.5 6h8a1.5 1.5 0 0 1 0 3h-8A1.5 1.5 0 0 1 6 7.5M7.5 7a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm3.646 3.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L12 11.707V15h3.5a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 0 1 0-3H11v-3.293l-1.146 1.147a.5.5 0 0 1-.708-.708zM7 16.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5" clip-rule="evenodd"/>
  </svg>
);

export default SendForward;
