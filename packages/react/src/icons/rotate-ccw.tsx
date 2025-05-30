
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const RotateCcw: React.FC<IconProps> = ({
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
    <path fill="#000" d="M13.768 6.475a2.5 2.5 0 0 0-3.536 0L8.707 8H10a.5.5 0 1 1 0 1H7.5a.5.5 0 0 1-.5-.5V6a.5.5 0 1 1 1 0v1.293l1.525-1.525a3.5 3.5 0 0 1 4.95 0l2.378 2.378a.5.5 0 1 1-.707.708z"/><path fill="#000" fill-rule="evenodd" d="M10.94 9.646a1.5 1.5 0 0 1 2.12 0l3.293 3.293a1.5 1.5 0 0 1 0 2.122l-3.293 3.293a1.5 1.5 0 0 1-2.12 0L7.645 15.06a1.5 1.5 0 0 1 0-2.122zm1.413.708a.5.5 0 0 0-.707 0l-3.293 3.293a.5.5 0 0 0 0 .707l3.293 3.293a.5.5 0 0 0 .707 0l3.293-3.293a.5.5 0 0 0 0-.707z" clip-rule="evenodd"/>
  </svg>
);

export default RotateCcw;
