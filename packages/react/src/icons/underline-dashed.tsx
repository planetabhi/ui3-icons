
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const UnderlineDashed: React.FC<IconProps> = ({
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
    <path fill="#000" d="M9 17a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1zm4 0a.5.5 0 1 1 0 1h-2a.5.5 0 0 1 0-1zm4 0a.5.5 0 1 1 0 1h-2a.5.5 0 0 1 0-1zM15.5 6a.5.5 0 0 1 .5.5V11a4 4 0 0 1-8 0V6.5a.5.5 0 0 1 1 0V11a3 3 0 0 0 6 0V6.5a.5.5 0 0 1 .5-.5"/>
  </svg>
);

export default UnderlineDashed;
