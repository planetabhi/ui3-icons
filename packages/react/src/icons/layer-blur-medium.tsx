
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const LayerBlurMedium: React.FC<IconProps> = ({
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
    <path fill="#000" d="M11.25 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M7.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m0 3.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M7.5 17a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m3-5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.75-9.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.75-6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M16.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m.75 5.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M16.5 17a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
  </svg>
);

export default LayerBlurMedium;
