
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const ThumbUp: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M9.8 9.752c.178-.103.36-.24.536-.416.47-.47.664-.986.664-1.336a2 2 0 1 1 4 0q-.001.513-.098 1a5.6 5.6 0 0 1-.297 1h2.175a2 2 0 0 1 1.909 2.597l-1.055 3.373a2.5 2.5 0 0 1-2.74 1.73l-4.975-.712A1.5 1.5 0 0 1 8.5 18h-1A1.5 1.5 0 0 1 6 16.5v-6A1.5 1.5 0 0 1 7.5 9h1a1.5 1.5 0 0 1 1.3.752m.2 1.019v5.219l5.036.72a1.5 1.5 0 0 0 1.644-1.038l1.054-3.374A1 1 0 0 0 16.78 11h-3.652l.548-1.371A4.4 4.4 0 0 0 14 8a1 1 0 1 0-2 0c0 .672-.345 1.43-.957 2.043A3.5 3.5 0 0 1 10 10.77m-1-.27a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5z" clip-rule="evenodd"/>
  </svg>
);

export default ThumbUp;
