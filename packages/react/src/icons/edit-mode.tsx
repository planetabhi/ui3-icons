
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const EditMode: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M18 15.05A2.5 2.5 0 1 1 15.05 18h-6.1A2.5 2.5 0 1 1 6 15.05v-6.1A2.5 2.5 0 1 1 8.95 6h6.1A2.5 2.5 0 1 1 18 8.95zM6.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m.5.95A2.5 2.5 0 0 0 8.95 7h6.1c.199.98.97 1.751 1.95 1.95v6.1c-.98.199-1.751.97-1.95 1.95h-6.1A2.5 2.5 0 0 0 7 15.05zM17.5 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-11 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" clip-rule="evenodd"/>
  </svg>
);

export default EditMode;
