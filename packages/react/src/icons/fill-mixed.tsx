
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const FillMixed: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M8 6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2 2 2 0 0 0 2 2 2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2 2 2 0 0 0-2-2 2 2 0 0 0-2-2zm4 1H8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m4 4v3a2 2 0 0 1-2 2h-3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-6 4a1 1 0 0 1-1-1h3a2 2 0 0 0 2-2V9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z" clip-rule="evenodd"/>
  </svg>
);

export default FillMixed;
