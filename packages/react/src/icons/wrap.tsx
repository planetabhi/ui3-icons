
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Wrap: React.FC<IconProps> = ({
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
    <path fill="#000" d="M15 7a2 2 0 1 1 0 4H9.711l2.4-2.388a.5.5 0 0 0-.706-.709l-3.258 3.243a.5.5 0 0 0 0 .708l3.258 3.243a.5.5 0 0 0 .705-.709L9.711 12H15a3 3 0 1 0 0-6h-.5a.5.5 0 0 0 0 1z"/>
  </svg>
);

export default Wrap;
