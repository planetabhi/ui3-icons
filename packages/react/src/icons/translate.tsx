
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Translate: React.FC<IconProps> = ({
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
    <path fill="#000" d="M9.5 5a.5.5 0 0 0-.5.5V7H5.5a.5.5 0 0 0 0 1h5.662c-.42 1.198-.895 2.08-1.668 3.067L7.99 9.187a.5.5 0 1 0-.78.625l1.63 2.037c-.68.77-1.548 1.65-2.694 2.798a.5.5 0 1 0 .708.706c1.08-1.081 1.93-1.941 2.62-2.711L10.88 14.4a.5.5 0 0 0 .78-.625l-1.526-1.907c.944-1.168 1.527-2.22 2.03-3.708l.054-.16H13.5a.5.5 0 0 0 0-1H10V5.5a.5.5 0 0 0-.5-.5"/><path fill="#000" fill-rule="evenodd" d="M14.5 11a.5.5 0 0 0-.461.308l-2.5 6a.5.5 0 1 0 .922.384L13.167 16h3.166l.706 1.692a.5.5 0 1 0 .922-.384l-2.5-6A.5.5 0 0 0 15 11zm.25 1.2 1.167 2.8h-2.334z" clip-rule="evenodd"/><path fill="#000" d="M17.015 6.44 16.7 7.7l-1.26.315c-.505.126-.505.844 0 .97l1.26.315.315 1.26c.126.505.844.505.97 0L18.3 9.3l1.26-.315c.505-.126.505-.844 0-.97L18.3 7.7l-.315-1.26c-.126-.505-.844-.505-.97 0"/>
  </svg>
);

export default Translate;
