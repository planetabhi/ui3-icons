
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const CreateVariant: React.FC<IconProps> = ({
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
    <path fill="#000" d="M11.5 9a.5.5 0 0 1 1 0v2.5H15a.5.5 0 1 1 0 1h-2.5V15a.5.5 0 0 1-1 0v-2.5H9a.5.5 0 0 1 0-1h2.5z"/><path fill="#000" fill-rule="evenodd" d="m11.116 3.384-7.732 7.732a1.25 1.25 0 0 0 0 1.768l7.732 7.732a1.25 1.25 0 0 0 1.768 0l7.732-7.732a1.25 1.25 0 0 0 0-1.768l-7.732-7.732a1.25 1.25 0 0 0-1.768 0m.707.707-7.732 7.732a.25.25 0 0 0 0 .354l7.732 7.732a.25.25 0 0 0 .354 0l7.732-7.732a.25.25 0 0 0 0-.354l-7.732-7.732a.25.25 0 0 0-.354 0" clip-rule="evenodd"/>
  </svg>
);

export default CreateVariant;
