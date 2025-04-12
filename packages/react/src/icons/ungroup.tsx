
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Ungroup: React.FC<IconProps> = ({
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
    <path fill="#000" d="m6.854 17.854 11-11a.5.5 0 0 0-.708-.708l-11 11a.5.5 0 0 0 .708.708M7.5 6A1.5 1.5 0 0 0 6 7.5a.5.5 0 0 0 1 0 .5.5 0 0 1 .5-.5.5.5 0 0 0 0-1m2 0a.5.5 0 0 0 0 1H11a.5.5 0 0 0 0-1zm5 0H13a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1M7 11V9.5a.5.5 0 0 0-1 0V11a.5.5 0 0 0 1 0m11 0V9.5a.5.5 0 0 0-1 0V11a.5.5 0 0 0 1 0M7 14.5V13a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 1 0m11 0V13a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 1 0M16.5 18a1.5 1.5 0 0 0 1.5-1.5.5.5 0 0 0-1 0 .5.5 0 0 1-.5.5.5.5 0 0 0 0 1M11 17H9.5a.5.5 0 0 0 0 1H11a.5.5 0 0 0 0-1m3.5 0H13a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1"/>
  </svg>
);

export default Ungroup;
