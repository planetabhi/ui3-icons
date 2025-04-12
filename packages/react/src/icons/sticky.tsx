
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Sticky: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M18.5 4h-13A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20h8.072a2 2 0 0 0 1.414-.586l4.428-4.428A2 2 0 0 0 20 13.572V5.5A1.5 1.5 0 0 0 18.5 4m-13 1h13a.5.5 0 0 1 .5.5V13h-5.5a.5.5 0 0 0-.5.5V19H5.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5M14 18.904a1 1 0 0 0 .279-.197l4.428-4.428a1 1 0 0 0 .197-.279H14z" clip-rule="evenodd"/>
  </svg>
);

export default Sticky;
