
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Keyboard: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M5 9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm3-1h2v2H8zm5 2h-2V8h2zm4 0h1V9a1 1 0 0 0-1-1zm-1 0V8h-2v2zM6 9a1 1 0 0 1 1-1v2H6zm6 4v-2h2v2zm3 0v-2h3v2zm-7-2H6v2h2zm1 0v2h2v-2zm-3 3v1a1 1 0 0 0 1 1h1v-2zm10 2h1a1 1 0 0 0 1-1v-1h-2zm-7-2h6v2H9z" clip-rule="evenodd"/>
  </svg>
);

export default Keyboard;
