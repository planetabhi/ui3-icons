
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const AlignTopAlt: React.FC<IconProps> = ({
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
    <path fill="#000" d="M10 17.25a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-8.5A.75.75 0 0 1 8.75 8h.5a.75.75 0 0 1 .75.75zm5-4a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75z"/><path fill="#000" fill-opacity=".3" d="M17.5 6a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1z"/>
  </svg>
);

export default AlignTopAlt;
