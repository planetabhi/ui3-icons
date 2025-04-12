
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Wand: React.FC<IconProps> = ({
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
    <path fill="#000" d="M9.5 4a.5.5 0 0 0-.5.5V9H4.5a.5.5 0 0 0 0 1H9v4.5a.5.5 0 0 0 1 0V10h4.5a.5.5 0 0 0 0-1H10V4.5a.5.5 0 0 0-.5-.5M15 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path fill="#000" d="M12.854 12.146a.5.5 0 0 0-.708.708l7 7a.5.5 0 0 0 .708-.708z"/>
  </svg>
);

export default Wand;
