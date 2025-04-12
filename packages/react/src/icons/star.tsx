
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Star: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M9 9H3.16c-.976 0-1.373 1.256-.574 1.818l4.83 3.397-1.928 5.81c-.307.924.755 1.697 1.54 1.121L12 17.5l4.972 3.646c.785.576 1.847-.197 1.54-1.122l-1.928-5.81 4.83-3.396c.8-.562.402-1.818-.575-1.818H15l-2.051-6.154c-.304-.912-1.594-.912-1.898 0zm5.28 1L12 3.162 9.72 10H3.16l5.44 3.824-2.163 6.516L12 16.26l5.563 4.08-2.163-6.516L20.84 10z" clip-rule="evenodd"/>
  </svg>
);

export default Star;
