
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const PlayPause: React.FC<IconProps> = ({
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
    <path fill="#000" d="M16 7.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0zm3 0a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0z"/><path fill="#000" fill-rule="evenodd" d="M7.624 7.279C6.492 6.547 5 7.359 5 8.706v6.588c0 1.348 1.492 2.16 2.624 1.427l5.09-3.294a1.7 1.7 0 0 0 0-2.854zM6 8.706a.7.7 0 0 1 1.08-.588l5.091 3.294a.7.7 0 0 1 0 1.176l-5.09 3.294A.7.7 0 0 1 6 15.294z" clip-rule="evenodd"/>
  </svg>
);

export default PlayPause;
