
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const ChevronUp: React.FC<IconProps> = ({
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
    <path fill="#000" d="M11.646 10.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L12 11.207l-1.646 1.647a.5.5 0 0 1-.708-.708z"/>
  </svg>
);

export default ChevronUp;
