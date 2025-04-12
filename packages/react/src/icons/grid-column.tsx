
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const GridColumn: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M7.5 6a.5.5 0 0 1 .5.5V7h3.5v-.5a.5.5 0 0 1 1 0V7H16v-.5a.5.5 0 0 1 1 0V7h.5a.5.5 0 0 1 0 1H17v8h.5a.5.5 0 0 1 0 1H17v.5a.5.5 0 0 1-1 0V17h-3.5v.5a.5.5 0 0 1-1 0V17H8v.5a.5.5 0 0 1-1 0V17h-.5a.5.5 0 0 1 0-1H7V8h-.5a.5.5 0 0 1 0-1H7v-.5a.5.5 0 0 1 .5-.5M8 16h3.5V8H8zm4.5 0H16V8h-3.5z" clip-rule="evenodd"/>
  </svg>
);

export default GridColumn;
