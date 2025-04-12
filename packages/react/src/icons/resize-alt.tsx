
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const ResizeAlt: React.FC<IconProps> = ({
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
    <path fill="#000" d="M6.854 6.146a.5.5 0 1 0-.708.708L8.293 9H6.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.793zM9 15.707l-2.146 2.147a.5.5 0 0 1-.708-.708L8.293 15H6.5a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0zm8.854-9.561a.5.5 0 0 0-.708 0L15 8.293V6.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-1.793l2.147-2.146a.5.5 0 0 0 0-.708M15 15.707l2.146 2.147a.5.5 0 0 0 .708-.708L15.707 15H17.5a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0z"/>
  </svg>
);

export default ResizeAlt;
