
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Responsive: React.FC<IconProps> = ({
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
    <path fill="#000" d="M15.146 11.354a.5.5 0 0 1 .708-.708l1 1a.5.5 0 0 1 0 .708l-1 1a.5.5 0 0 1-.708-.708l.647-.646zm-6.292-.708a.5.5 0 0 1 0 .708L8.207 12l.647.646a.5.5 0 0 1-.708.708l-1-1a.5.5 0 0 1 0-.708l1-1a.5.5 0 0 1 .708 0"/><path fill="#000" fill-rule="evenodd" d="M17.5 6A1.5 1.5 0 0 1 19 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 16.5v-9A1.5 1.5 0 0 1 6.5 6zM14 7h3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5H14zm-1 0h-2v10h2zm-3 0H6.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H10z" clip-rule="evenodd"/>
  </svg>
);

export default Responsive;
