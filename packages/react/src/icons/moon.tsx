
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Moon: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M17.304 14.808c.315-.595-.41-1.13-1.063-.963a5 5 0 0 1-6.086-6.086c.167-.653-.368-1.379-.962-1.063a6 6 0 1 0 8.111 8.112M15 15a6 6 0 0 0 1.07-.095A5 5 0 1 1 9.095 7.93 6 6 0 0 0 15 15" clip-rule="evenodd"/><path fill="#000" d="M16 7.5a.5.5 0 0 0-1 0V8h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V9h.5a.5.5 0 0 0 0-1H16z"/>
  </svg>
);

export default Moon;
