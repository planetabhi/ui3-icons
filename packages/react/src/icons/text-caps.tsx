
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const TextCaps: React.FC<IconProps> = ({
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
    <path fill="#000" d="M17.476 10.525H18.6c-.245-1.417-1.456-2.397-3.025-2.397-1.882 0-3.256 1.417-3.256 3.74 0 2.3 1.335 3.73 3.306 3.73 1.764 0 3.025-1.156 3.025-2.992v-.828h-2.858v.906h1.796c-.024 1.172-.799 1.914-1.963 1.914-1.282 0-2.216-.97-2.216-2.738 0-1.761.94-2.73 2.173-2.73.966 0 1.621.532 1.894 1.395"/><path fill="#000" fill-rule="evenodd" d="m6.412 15.5.668-1.925h2.84l.665 1.925h1.165L9.133 8.227H7.865L5.248 15.5zm.988-2.848 1.072-3.104h.057L9.6 12.652z" clip-rule="evenodd"/>
  </svg>
);

export default TextCaps;
