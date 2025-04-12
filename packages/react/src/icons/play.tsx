
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Play: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M18.058 13.696a2 2 0 0 0 .004-3.404L9.9 5.242C8.634 4.457 7 5.368 7 6.856V17.1c0 1.486 1.63 2.397 2.896 1.618zm-8.686 4.17 8.162-5.022a1 1 0 0 0 .002-1.702l-8.162-5.05A.9.9 0 0 0 8 6.857V17.1a.9.9 0 0 0 1.372.766" clip-rule="evenodd"/>
  </svg>
);

export default Play;
