
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Password: React.FC<IconProps> = ({
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
    <path fill="#000" d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path fill="#000" fill-rule="evenodd" d="M5 10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm2-1h10a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1" clip-rule="evenodd"/>
  </svg>
);

export default Password;
