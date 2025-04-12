
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const FillImage: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M16 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M6 16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2zm10-9H8a1 1 0 0 0-1 1v5.668l2.521-2.522a.5.5 0 0 1 .708 0l5.85 5.85A1 1 0 0 0 17 16V8a1 1 0 0 0-1-1M8 17h6.668l-4.793-4.793L7 15.082V16a1 1 0 0 0 1 1" clip-rule="evenodd"/>
  </svg>
);

export default FillImage;
