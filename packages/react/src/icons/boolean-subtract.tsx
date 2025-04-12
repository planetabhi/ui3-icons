
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const BooleanSubtract: React.FC<IconProps> = ({
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
    <path fill="#000" fill-opacity=".3" d="M10 14v5h9v-9h-5v4z"/><path fill="#000" fill-rule="evenodd" d="M5 15h4v4a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-4V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1m5 4v-4h4a1 1 0 0 0 1-1v-4h4v9zm4-5V5H5v9z" clip-rule="evenodd"/>
  </svg>
);

export default BooleanSubtract;
