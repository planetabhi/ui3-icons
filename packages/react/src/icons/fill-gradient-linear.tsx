
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const FillGradientLinear: React.FC<IconProps> = ({
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
    <path fill="#000" d="M12.083 10.375a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 3.87a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m2.834.87a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0m-.625-2.615a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25m.625-3.625a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0m-5.292.875a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75m.875 5.365a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0m-.875-2.365a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75M16 10.375a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-.5 3.623a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/><path fill="#000" fill-rule="evenodd" d="M8 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm8 1H8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1" clip-rule="evenodd"/>
  </svg>
);

export default FillGradientLinear;
