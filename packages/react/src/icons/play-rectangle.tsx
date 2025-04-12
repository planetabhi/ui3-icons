
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const PlayRectangle: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M13.53 11.054a1 1 0 0 0-1.53.848v3.196a1 1 0 0 0 1.53.848l2.557-1.598a1 1 0 0 0 0-1.696zm-.53.848 2.557 1.598L13 15.098z" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M19 8h-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2M5 6h10a1 1 0 0 1 1 1v1H9a2 2 0 0 0-2 2v5H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m14 3H9a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1" clip-rule="evenodd"/>
  </svg>
);

export default PlayRectangle;
