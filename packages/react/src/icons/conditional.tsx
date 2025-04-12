
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Conditional: React.FC<IconProps> = ({
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
    <path fill="#000" d="M12 5a.5.5 0 0 1 .5.5V8H15a1.5 1.5 0 0 1 1.5 1.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 0 15 9H9a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 9 8h2.5V5.5A.5.5 0 0 1 12 5m-5.854 9.146a.5.5 0 0 1 .708 0L8 15.293l1.146-1.147a.5.5 0 0 1 .708.708L8.707 16l1.147 1.146a.5.5 0 0 1-.708.708L8 16.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 16l-1.147-1.146a.5.5 0 0 1 0-.708"/><path fill="#000" fill-rule="evenodd" d="M18 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"/>
  </svg>
);

export default Conditional;
