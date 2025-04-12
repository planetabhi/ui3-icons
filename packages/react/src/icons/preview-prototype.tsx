
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const PreviewPrototype: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="m14.69 12.44-3.277-2.049a1.25 1.25 0 0 0-1.913 1.06v4.098a1.25 1.25 0 0 0 1.912 1.06l3.279-2.049a1.25 1.25 0 0 0 0-2.12m-.53 1.272a.25.25 0 0 0 0-.424l-3.277-2.049a.25.25 0 0 0-.383.212v4.098a.25.25 0 0 0 .383.212z" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M5.5 4A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 18.5 4zM16 5H8v2h8zm1 0v2h2V5.5a.5.5 0 0 0-.5-.5zM5.5 5H7v2H5V5.5a.5.5 0 0 1 .5-.5M19 8H5v10.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5z" clip-rule="evenodd"/>
  </svg>
);

export default PreviewPrototype;
