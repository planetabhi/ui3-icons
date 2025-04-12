
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Mention: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M12 6a6 6 0 1 0 0 12 .5.5 0 0 1 0 1 7 7 0 1 1 7-7v.5a2.5 2.5 0 0 1-4.62 1.326A3 3 0 1 1 14 9.764V9.5a.5.5 0 0 1 1 0v3a1.5 1.5 0 0 0 3 0V12a6 6 0 0 0-6-6m2 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0" clip-rule="evenodd"/>
  </svg>
);

export default Mention;
