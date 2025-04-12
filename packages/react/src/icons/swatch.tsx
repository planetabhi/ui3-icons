
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Swatch: React.FC<IconProps> = ({
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
    <path fill="#000" d="M9 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path fill="#000" fill-rule="evenodd" d="M6 8a3 3 0 0 1 6 0v7c0 .768-.289 1.47-.764 2H16a2 2 0 1 0 0-4h-.757l-3.597 3.596q-.133.135-.28.248A3 3 0 0 0 12 15v-.171l3.89-3.89a2 2 0 0 0-2.83-2.828L12 9.171V8q0-.118-.009-.233l.363-.363a3 3 0 1 1 4.242 4.243l-.362.362a3 3 0 0 1-.234 5.99H9.032L9 18a3 3 0 0 1-3-3zm5 0v7a2 2 0 1 1-4 0V8a2 2 0 1 1 4 0" clip-rule="evenodd"/>
  </svg>
);

export default Swatch;
