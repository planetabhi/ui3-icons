
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Interkey: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M10.5 5A1.5 1.5 0 0 0 9 6.5V9H6.5A1.5 1.5 0 0 0 5 10.5v3A1.5 1.5 0 0 0 6.5 15H9v2.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V15h2.5a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 17.5 9H15V6.5A1.5 1.5 0 0 0 13.5 5zM10 6.5V10H6.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H10v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14h3.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H14V6.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5" clip-rule="evenodd"/>
  </svg>
);

export default Interkey;
