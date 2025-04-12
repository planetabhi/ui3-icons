
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Spotlight: React.FC<IconProps> = ({
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
    <path fill="#000" d="M14.724 5.053a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 1 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223m3.131 1.093a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0m-6.5 6.5a.5.5 0 0 1 0 .707l-.5.5a.5.5 0 0 1-.708-.707l.5-.5a.5.5 0 0 1 .708 0"/><path fill="#000" fill-rule="evenodd" d="M11.646 6.646a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1 0 .707l-2 2a.5.5 0 0 1-.196.121l-2.888.963-2.71 2.71a1.5 1.5 0 0 1-2.12 0L5.853 16.56a1.5 1.5 0 0 1 0-2.122l2.709-2.71.963-2.887a.5.5 0 0 1 .12-.196zm-1.428 3.28 3.856 3.855-2.232.745a.5.5 0 0 0-.196.12L8.854 17.44a.5.5 0 0 1-.708 0l-1.585-1.585a.5.5 0 0 1 0-.708l2.793-2.793a.5.5 0 0 0 .12-.195zM15 13.293 16.293 12 12 7.707 10.707 9z" clip-rule="evenodd"/><path fill="#000" d="M18.947 9.276a.5.5 0 0 1-.223.671l-1 .5a.5.5 0 1 1-.448-.894l1-.5a.5.5 0 0 1 .671.223"/>
  </svg>
);

export default Spotlight;
