
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const MagicNoodle: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="m20.854 6.854-3 3a.5.5 0 0 1-.708-.708L19.293 7H15.5A2.5 2.5 0 0 0 13 9.5v5A3.5 3.5 0 0 1 9.5 18h-.55a2.5 2.5 0 1 1 0-1h.55a2.5 2.5 0 0 0 2.5-2.5v-5A3.5 3.5 0 0 1 15.5 6h3.793l-2.147-2.146a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708M8 17.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" clip-rule="evenodd"/><path fill="#000" d="m16.7 16.7.315-1.26c.126-.505.844-.505.97 0l.315 1.26 1.26.315c.505.126.505.844 0 .97l-1.26.315-.315 1.26c-.126.505-.844.505-.97 0L16.7 18.3l-1.26-.315c-.505-.126-.505-.844 0-.97zM6.015 3.44 5.5 5.5l-2.06.515c-.505.126-.505.844 0 .97L5.5 7.5l.515 2.06c.126.505.844.505.97 0L7.5 7.5l2.06-.515c.505-.126.505-.844 0-.97L7.5 5.5l-.515-2.06c-.126-.505-.844-.505-.97 0"/>
  </svg>
);

export default MagicNoodle;
