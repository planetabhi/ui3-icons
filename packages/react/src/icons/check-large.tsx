
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const CheckLarge: React.FC<IconProps> = ({
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
    <path fill="#000" d="M16.765 7.076a.5.5 0 0 1 .159.69l-5 8a.5.5 0 0 1-.824.034l-3-4a.5.5 0 1 1 .8-.6l2.563 3.417 4.613-7.382a.5.5 0 0 1 .689-.159"/>
  </svg>
);

export default CheckLarge;
