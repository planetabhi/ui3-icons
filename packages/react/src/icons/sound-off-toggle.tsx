
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const SoundOffToggle: React.FC<IconProps> = ({
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
    <path fill="#000" d="M14 7.879V6a1 1 0 0 0-1.707-.707L9.586 8H6.5A1.5 1.5 0 0 0 5 9.5v5a1.5 1.5 0 0 0 .974 1.405L6.879 15H6.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5H10l3-3v2.879zm0 4.242-1 1V18l-2.44-2.44-.706.708 2.439 2.44A1 1 0 0 0 14 18zm3.854-5.975a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.707l11-11a.5.5 0 0 1 .708 0m-2.354 4.53v-.056l.681-.68A3 3 0 0 1 15.5 14.6v-1.277c.311-.352.5-.816.5-1.323s-.189-.97-.5-1.323"/><path fill="#000" d="M18 12a4 4 0 0 0-1.112-2.767l.708-.707a5.002 5.002 0 0 1-2.096 8.246V15.71A4 4 0 0 0 18 12"/>
  </svg>
);

export default SoundOffToggle;
