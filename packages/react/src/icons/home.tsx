
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Home: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M10 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9a1 1 0 0 1 .35-.76l7-6a1 1 0 0 1 1.3 0l7 6A1 1 0 0 1 20 10v9a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6h-4zm-5 0v-9l7-6 7 6v9h-4v-6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v6z" clip-rule="evenodd"/>
  </svg>
);

export default Home;
