
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const LockLocked: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M8 10V8a4 4 0 1 1 8 0v2h.125C17.16 10 18 10.84 18 11.875v5.25C18 18.16 17.16 19 16.125 19h-8.25A1.875 1.875 0 0 1 6 17.125v-5.25C6 10.839 6.84 10 7.875 10zm1-2a3 3 0 1 1 6 0v2H9zm-2 3.875c0-.483.392-.875.875-.875h8.25c.483 0 .875.392.875.875v5.25a.875.875 0 0 1-.875.875h-8.25A.875.875 0 0 1 7 17.125z" clip-rule="evenodd"/>
  </svg>
);

export default LockLocked;
