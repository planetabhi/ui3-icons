
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const GoParent: React.FC<IconProps> = ({
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
    <path fill="#000" d="M12.285 5.089a.5.5 0 0 0-.57 0l-6.5 4.5a.5.5 0 0 0 .028.84l2.5 1.5a.5.5 0 1 0 .514-.858L6.422 9.97 12 6.108l5.578 3.862-1.835 1.101a.5.5 0 1 0 .514.858l2.5-1.5a.5.5 0 0 0 .028-.84z"/><path fill="#000" d="m15.354 14.146-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 .708.708l2.146-2.147V18.5a.5.5 0 0 0 1 0v-5.793l2.146 2.147a.5.5 0 0 0 .708-.708"/>
  </svg>
);

export default GoParent;
