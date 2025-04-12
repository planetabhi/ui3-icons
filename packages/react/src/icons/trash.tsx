
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Trash: React.FC<IconProps> = ({
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
    <path fill="#000" d="M11 11.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zm3 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0z"/><path fill="#000" fill-rule="evenodd" d="M9 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h2.5a1.5 1.5 0 0 1 .463 2.927l-.841 9.254A2 2 0 0 1 15.13 20H8.87a2 2 0 0 1-1.992-1.819l-.841-9.254A1.5 1.5 0 0 1 6.5 6zm1 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm7.494 2h.01a.5.5 0 0 0-.004-1h-11a.5.5 0 0 0-.004 1zm-.541 1H7.048l.826 9.09a1 1 0 0 0 .996.91h6.26a1 1 0 0 0 .996-.91z" clip-rule="evenodd"/>
  </svg>
);

export default Trash;
