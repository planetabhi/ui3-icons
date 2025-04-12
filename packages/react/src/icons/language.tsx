
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Language: React.FC<IconProps> = ({
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
    <path fill="#000" d="M9 5.5a.5.5 0 0 1 1 0V7h3.5a.5.5 0 0 1 0 1h-1.282l-.054.16c-.503 1.488-1.086 2.54-2.03 3.708l1.527 1.907a.5.5 0 1 1-.781.625l-1.407-1.758c-.689.77-1.54 1.63-2.62 2.711a.5.5 0 1 1-.707-.706c1.146-1.148 2.013-2.028 2.693-2.798L7.21 9.812a.5.5 0 0 1 .781-.624l1.504 1.879c.773-.986 1.248-1.869 1.668-3.067H5.5a.5.5 0 0 1 0-1H9z"/><path fill="#000" fill-rule="evenodd" d="M14.039 11.308A.5.5 0 0 1 14.5 11h.5a.5.5 0 0 1 .461.308l2.5 6a.5.5 0 1 1-.922.384L16.333 16h-3.166l-.706 1.692a.5.5 0 1 1-.922-.384zM15.917 15l-1.167-2.8-1.167 2.8z" clip-rule="evenodd"/>
  </svg>
);

export default Language;
