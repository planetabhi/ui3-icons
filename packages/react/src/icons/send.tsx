
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Send: React.FC<IconProps> = ({
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
    <path fill="#000" d="M11.646 5.646a.5.5 0 0 1 .708 0l4.5 4.5a.5.5 0 0 1-.708.708L12.5 7.207V18a.5.5 0 0 1-1 0V7.207l-3.646 3.647a.5.5 0 0 1-.708-.708z"/>
  </svg>
);

export default Send;
