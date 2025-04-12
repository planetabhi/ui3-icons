
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Audio: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="m4.944 11.932 1.237-.177a2.25 2.25 0 0 1 2.548 1.93l.504 3.777a2.242 2.242 0 0 1-4.442.613l-.787-5.513-.017-.132C3.427 7.954 6.918 4 11.43 4h1.14c4.512 0 8.002 3.954 7.443 8.43l-.018.14-.786 5.505a2.242 2.242 0 0 1-4.442-.613l.504-3.777a2.25 2.25 0 0 1 2.548-1.93l1.237.177C19.31 8.209 16.354 5 12.57 5h-1.14c-3.784 0-6.74 3.209-6.486 6.932m13.99.992-.715 5.01a1.242 1.242 0 0 1-2.46-.34l.503-3.777a1.25 1.25 0 0 1 1.416-1.072zm-13.868 0 .715 5.01a1.242 1.242 0 0 0 2.46-.34l-.503-3.777a1.25 1.25 0 0 0-1.416-1.072z" clip-rule="evenodd"/>
  </svg>
);

export default Audio;
