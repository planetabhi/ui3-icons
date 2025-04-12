
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Design: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M6.46 4.682A1.438 1.438 0 0 0 4.681 6.46l1.962 6.859a5.615 5.615 0 0 0 6.84 4.288c.08-.02.14.005.169.033l1.217 1.22c.682.684 1.79.684 2.473 0l1.52-1.523a1.754 1.754 0 0 0 0-2.476l-1.24-1.241c-.027-.028-.052-.087-.033-.166q.151-.63.152-1.305a5.62 5.62 0 0 0-4.204-5.444zm-.1 1.012 4.492 4.452a1.5 1.5 0 1 1-.707.707L5.726 6.474l1.89 6.605.003.018a4.615 4.615 0 0 0 5.624 3.539 1.18 1.18 0 0 1 1.118.298l1.216 1.22a.746.746 0 0 0 1.058 0l1.52-1.523a.754.754 0 0 0 0-1.064l-1.24-1.24a1.17 1.17 0 0 1-.298-1.104q.123-.517.125-1.074a4.62 4.62 0 0 0-3.46-4.477l-.013-.003zM11.499 12a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" clip-rule="evenodd"/>
  </svg>
);

export default Design;
