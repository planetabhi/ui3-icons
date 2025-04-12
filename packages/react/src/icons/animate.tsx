
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Animate: React.FC<IconProps> = ({
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
    <path fill="#000" d="M7.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm-4 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm4 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/><path fill="#000" fill-rule="evenodd" d="M21 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-1 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0" clip-rule="evenodd"/>
  </svg>
);

export default Animate;
