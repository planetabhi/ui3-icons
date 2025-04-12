
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const FillScreen: React.FC<IconProps> = ({
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
    <path fill="#000" d="M7.5 8a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V9h1.5a.5.5 0 0 0 0-1zm7 0a.5.5 0 0 0 0 1H16v1.5a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5zM8 13.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H8zm9 0a.5.5 0 0 0-1 0V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5z"/><path fill="#000" fill-rule="evenodd" d="M5 7.5A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 16.5zM6.5 7h11a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5" clip-rule="evenodd"/>
  </svg>
);

export default FillScreen;
