
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Bold: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M8 8a2 2 0 0 1 2-2h2.75a3.25 3.25 0 0 1 2.418 5.422A3.5 3.5 0 0 1 13.5 18H10a2 2 0 0 1-2-2zm6.5 1.25A1.75 1.75 0 0 1 12.75 11H9.5V8a.5.5 0 0 1 .5-.5h2.75c.966 0 1.75.784 1.75 1.75m-5 3.25V16a.5.5 0 0 0 .5.5h3.5a2 2 0 1 0 0-4z" clip-rule="evenodd"/>
  </svg>
);

export default Bold;
