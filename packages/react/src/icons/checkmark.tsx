
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Checkmark: React.FC<IconProps> = ({
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
    <path fill="#000" d="M14.929 9.757a.5.5 0 1 0-.858-.514l-2.593 4.322-1.562-2.342a.5.5 0 1 0-.832.554l2 3a.5.5 0 0 0 .845-.02z"/><path fill="#000" fill-rule="evenodd" d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0" clip-rule="evenodd"/>
  </svg>
);

export default Checkmark;
