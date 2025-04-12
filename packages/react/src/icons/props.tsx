
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Props: React.FC<IconProps> = ({
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
    <path fill="#000" d="M8.207 10a.5.5 0 0 0 .353-.146l3.263-3.263a.25.25 0 0 1 .354 0l5.232 5.232a.25.25 0 0 1 0 .354l-5.232 5.232a.25.25 0 0 1-.354 0l-3.262-3.263a.5.5 0 0 0-.707.708l3.262 3.262a1.25 1.25 0 0 0 1.768 0l5.232-5.232a1.25 1.25 0 0 0 0-1.768l-5.232-5.232a1.25 1.25 0 0 0-1.768 0L7.853 9.146a.5.5 0 0 0 .354.854"/><path fill="#000" fill-rule="evenodd" d="M14 12a2 2 0 0 1-3.937.5H6a.5.5 0 0 1 0-1h4.063A2 2 0 0 1 14 12m-3 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0" clip-rule="evenodd"/>
  </svg>
);

export default Props;
