
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Backward: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M15.293 7.293A1 1 0 0 1 17 8v8a1 1 0 0 1-1.707.707L12 13.414V16a1 1 0 0 1-1.707.707l-4-4a1 1 0 0 1 0-1.414l4-4A1 1 0 0 1 12 8v2.586zM12 12l4-4v8zm-1 4V8l-4 4z" clip-rule="evenodd"/>
  </svg>
);

export default Backward;
