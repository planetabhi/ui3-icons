
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const ShapeText: React.FC<IconProps> = ({
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
    <path fill="#000" d="M9.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V10h1.5v4H11a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.5v-4H14v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5z"/><path fill="#000" fill-rule="evenodd" d="M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" clip-rule="evenodd"/>
  </svg>
);

export default ShapeText;
