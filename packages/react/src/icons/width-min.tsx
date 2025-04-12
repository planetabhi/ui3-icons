
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const WidthMin: React.FC<IconProps> = ({
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
    <path fill="#000" d="m14.146 11.854 2 2a.5.5 0 0 0 .708-.708L15.707 12H19.5a.5.5 0 0 0 0-1h-3.793l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708m-3.292 0-2 2a.5.5 0 0 1-.708-.708L9.293 12H5.5a.5.5 0 0 1 0-1h3.793L8.146 9.854a.5.5 0 1 1 .708-.708l2 2a.5.5 0 0 1 0 .708M13 5.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0z"/>
  </svg>
);

export default WidthMin;
