
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Hand: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M7 6a2 2 0 0 1 3.112-1.662 2 2 0 0 1 3.775-.002A2 2 0 0 1 16.997 6v.27A2 2 0 0 1 20 8v.5h.01v4.863q0 .144-.02.284a7.773 7.773 0 0 1-7.753 7.216q-.266 0-.516-.012c-3.682-.167-6.256-3.449-8.113-6.633-.565-.969-1.11-2.043-.316-2.812.793-.77 1.898-.505 2.705.25L7 12.604zm5.997 2.62H13V10a.5.5 0 0 0 1 0V5.923A1 1 0 0 1 15.997 6v2.62H16V10a.5.5 0 0 0 1 0V8a1 1 0 1 1 2 0v.62h.01v4.743q0 .074-.01.143l-.007.07a6.773 6.773 0 0 1-6.756 6.287q-.243 0-.47-.01c-1.535-.07-2.885-.786-4.107-1.92-1.23-1.141-2.28-2.66-3.188-4.219-.289-.495-.486-.88-.555-1.193a.6.6 0 0 1-.016-.263c.007-.029.022-.071.087-.135a.57.57 0 0 1 .517-.173c.224.03.518.165.807.434l.001.002 1 .945A1 1 0 0 0 8 12.604V6a1 1 0 0 1 2 0v4a.5.5 0 0 0 1 0V5a1 1 0 1 1 2 0v.89l-.003.11z" clip-rule="evenodd"/>
  </svg>
);

export default Hand;
