
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Opacity: React.FC<IconProps> = ({
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
    <path fill="#000" d="M15 9.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M13.5 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M11 13.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M9.5 15a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5-1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m0 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/><path fill="#000" fill-rule="evenodd" d="M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" clip-rule="evenodd"/>
  </svg>
);

export default Opacity;
