
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const GradientDiamond: React.FC<IconProps> = ({
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
    <path fill="#000" fill-opacity=".3" fill-rule="evenodd" d="M8 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm.464 5.293a1 1 0 0 0 0 1.414l2.829 2.829a1 1 0 0 0 1.414 0l2.829-2.829a1 1 0 0 0 0-1.414l-2.829-2.829a1 1 0 0 0-1.414 0z" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M8.464 12.707a1 1 0 0 1 0-1.414l2.829-2.829a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.829 2.829a1 1 0 0 1-1.414 0zM9.172 12 12 9.172 14.828 12 12 14.828z" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" clip-rule="evenodd"/>
  </svg>
);

export default GradientDiamond;
