
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const LockOpen: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M9 7a3 3 0 1 1 6 0v.5a.5.5 0 0 0 1 0V7a4 4 0 0 0-8 0v3h-.125C6.839 10 6 10.84 6 11.875v5.25C6 18.16 6.84 19 7.875 19h8.25C17.16 19 18 18.16 18 17.125v-5.25C18 10.839 17.16 10 16.125 10H9zm-2 4.875c0-.483.392-.875.875-.875h8.25c.483 0 .875.392.875.875v5.25a.875.875 0 0 1-.875.875h-8.25A.875.875 0 0 1 7 17.125z" clip-rule="evenodd"/>
  </svg>
);

export default LockOpen;
