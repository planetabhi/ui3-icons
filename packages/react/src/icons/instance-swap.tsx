
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const InstanceSwap: React.FC<IconProps> = ({
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
    <path fill="#000" d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0V7h2.5a.5.5 0 0 0 0-1zm8 0a.5.5 0 0 0 0 1H17v2.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5zM7 14.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H7zm11 0a.5.5 0 0 0-1 0V17h-2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5z"/><path fill="#000" fill-rule="evenodd" d="M12.354 8.646a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708zM12 14.293 9.707 12 12 9.707 14.293 12z" clip-rule="evenodd"/>
  </svg>
);

export default InstanceSwap;
