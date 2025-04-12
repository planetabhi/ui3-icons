
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const SoundOn: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M12.293 5.293 9.586 8H6.5A1.5 1.5 0 0 0 5 9.5v5A1.5 1.5 0 0 0 6.5 16h3.086l2.707 2.707A1 1 0 0 0 14 18V6a1 1 0 0 0-1.707-.707M10 15l3 3V6l-3 3H6.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5z" clip-rule="evenodd"/><path fill="#000" d="M19 12a5 5 0 0 1-3.5 4.771V15.71a4.001 4.001 0 0 0 0-7.418V7.229A5 5 0 0 1 19 12"/><path fill="#000" d="M17 12a3 3 0 0 1-1.5 2.599v-1.276c.311-.353.5-.816.5-1.323s-.189-.97-.5-1.323V9.401a3 3 0 0 1 1.5 2.6"/>
  </svg>
);

export default SoundOn;
