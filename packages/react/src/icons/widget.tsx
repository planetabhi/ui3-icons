
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Widget: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M15.793 3.707a1 1 0 0 1 1.414 0l3.086 3.087a1 1 0 0 1 0 1.414l-3.086 3.085a1 1 0 0 1-1.414 0l-3.086-3.085a1 1 0 0 1 0-1.414zm.707.708L19.586 7.5 16.5 10.586l-3.086-3.085zm-12.268.317A2.5 2.5 0 0 1 7.5 4.5a2.5 2.5 0 0 1 3.268 3.768l-2.56 2.56a1 1 0 0 1-1.415 0l-2.56-2.56a2.5 2.5 0 0 1 0-3.536m3.707.707a1.5 1.5 0 0 1 2.122 2.122L7.5 10.12 4.94 7.56a1.5 1.5 0 1 1 2.12-2.122l.44.44zM20 16.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M5 13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm5 1H5v5h5z" clip-rule="evenodd"/>
  </svg>
);

export default Widget;
