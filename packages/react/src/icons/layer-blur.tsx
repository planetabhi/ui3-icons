
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const LayerBlur: React.FC<IconProps> = ({
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
    <path fill="#000" d="M12.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m3 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M9 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M12.75 9a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M6.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M6 15.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6.5 9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M6 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M9.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M9 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m4-.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.5-.75a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-.5 3.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M18 9.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m.5-3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M9 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M12.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
  </svg>
);

export default LayerBlur;
