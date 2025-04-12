
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Mail: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M18.12 6A1.88 1.88 0 0 1 20 7.88v8.24A1.88 1.88 0 0 1 18.12 18H5.88A1.88 1.88 0 0 1 4 16.12V7.88A1.88 1.88 0 0 1 5.88 6zM19 8.7v-.82a.88.88 0 0 0-.88-.88H5.88a.88.88 0 0 0-.88.88v.82l7 3.733zm0 1.133-7 3.734-7-3.734v6.287c0 .486.394.88.88.88h12.24a.88.88 0 0 0 .88-.88z" clip-rule="evenodd"/>
  </svg>
);

export default Mail;
