
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Scroll: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M14 7a2 2 0 0 1-1.504 1.938q.004.03.004.062v1h1a.5.5 0 0 1 0 1h-1v5.975a5 5 0 0 0 3.955-2.703.5.5 0 1 1 .89.456A6 6 0 0 1 12.5 17.98v.52a.5.5 0 0 1-1 0v-.52a6 6 0 0 1-4.845-3.252.5.5 0 0 1 .89-.456 5 5 0 0 0 3.955 2.703V11h-1a.5.5 0 0 1 0-1h1V9q0-.032.004-.062A2 2 0 1 1 14 7m-2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/>
  </svg>
);

export default Scroll;
