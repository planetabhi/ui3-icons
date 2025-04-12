
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Variant: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="m11.116 5.884-5.232 5.232a1.25 1.25 0 0 0 0 1.768l5.232 5.232a1.25 1.25 0 0 0 1.768 0l5.232-5.232a1.25 1.25 0 0 0 0-1.768l-5.232-5.232a1.25 1.25 0 0 0-1.768 0m.707.707-5.232 5.232a.25.25 0 0 0 0 .354l5.232 5.232a.25.25 0 0 0 .354 0l5.232-5.232a.25.25 0 0 0 0-.354l-5.232-5.232a.25.25 0 0 0-.354 0" clip-rule="evenodd"/>
  </svg>
);

export default Variant;
