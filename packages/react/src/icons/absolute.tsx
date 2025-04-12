
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Absolute: React.FC<IconProps> = ({
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
    <path fill="#000" d="M6 7a1 1 0 0 1 1-1h2.5a.5.5 0 1 1 0 1H7v2.5a.5.5 0 0 1-1 0zm12 0a1 1 0 0 0-1-1h-2.5a.5.5 0 1 0 0 1H17v2.5a.5.5 0 1 0 1 0zM7 18a1 1 0 0 1-1-1v-2.5a.5.5 0 0 1 1 0V17h2.5a.5.5 0 0 1 0 1zm11-1a1 1 0 0 1-1 1h-2.5a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 1 1 1 0z"/><path fill="#000" fill-rule="evenodd" d="M9 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm1 0h4v4h-4z" clip-rule="evenodd"/>
  </svg>
);

export default Absolute;
