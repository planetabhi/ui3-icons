
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Search: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M14.73 15.436a6.5 6.5 0 1 1 .707-.707l4.417 4.418a.5.5 0 0 1-.708.707zM16 10.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" clip-rule="evenodd"/>
  </svg>
);

export default Search;
