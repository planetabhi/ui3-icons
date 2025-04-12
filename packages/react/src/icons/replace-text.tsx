
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const ReplaceText: React.FC<IconProps> = ({
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
    <path fill="#000" d="M3.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V6h3v7h-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H8V6h3v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5z"/><path fill="#000" fill-rule="evenodd" d="M13 10a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zm0 1h7v1h-3v6h-1v-6h-3z" clip-rule="evenodd"/>
  </svg>
);

export default ReplaceText;
