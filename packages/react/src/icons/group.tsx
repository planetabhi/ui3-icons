
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Group: React.FC<IconProps> = ({
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
    <path fill="#000" d="M6 7.5A1.5 1.5 0 0 1 7.5 6a.5.5 0 0 1 0 1 .5.5 0 0 0-.5.5.5.5 0 0 1-1 0m3-1a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5m3.5 0A.5.5 0 0 1 13 6h1.5a.5.5 0 0 1 0 1H13a.5.5 0 0 1-.5-.5m3.5 0a.5.5 0 0 1 .5-.5A1.5 1.5 0 0 1 18 7.5a.5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5M6.5 9a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-1 0V9.5a.5.5 0 0 1 .5-.5m11 0a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-1 0V9.5a.5.5 0 0 1 .5-.5m-11 3.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-1 0V13a.5.5 0 0 1 .5-.5m11 0a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-1 0V13a.5.5 0 0 1 .5-.5M6.5 16a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 6 16.5a.5.5 0 0 1 .5-.5m11 0a.5.5 0 0 1 .5.5 1.5 1.5 0 0 1-1.5 1.5.5.5 0 0 1 0-1 .5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5M9 17.5a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5m3.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H13a.5.5 0 0 1-.5-.5"/>
  </svg>
);

export default Group;
