
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Interleave: React.FC<IconProps> = ({
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
    <path fill="#000" d="M16.5 6A1.5 1.5 0 0 1 18 7.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 1 0v1a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 16.5v-9A1.5 1.5 0 0 1 7.5 6z"/><path fill="#000" d="M11.646 9.146a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708l1.647-1.646H9.5a.5.5 0 0 1 0-1h3.793l-1.647-1.646a.5.5 0 0 1 0-.708"/>
  </svg>
);

export default Interleave;
