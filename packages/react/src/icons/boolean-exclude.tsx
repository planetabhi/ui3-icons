
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const BooleanExclude: React.FC<IconProps> = ({
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
    <path fill="#000" fill-opacity=".3" fill-rule="evenodd" d="M5 5h9v5h-4v4H5zm5 9h4v-4h5v9h-9z" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M5 15a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4h4a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-4zm5 0v4h9v-9h-4v4a1 1 0 0 1-1 1zm0-1v-4h4v4zm-1 0H5V5h9v4h-4a1 1 0 0 0-1 1z" clip-rule="evenodd"/>
  </svg>
);

export default BooleanExclude;
