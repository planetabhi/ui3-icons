
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const VisualSearch: React.FC<IconProps> = ({
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
    <path fill="#000" d="M5 14.5a.5.5 0 0 0-1 0V17a3 3 0 0 0 3 3h2.5a.5.5 0 0 0 0-1H7a2 2 0 0 1-2-2zM14.5 4a.5.5 0 0 0 0 1H17a2 2 0 0 1 2 2v2.5a.5.5 0 0 0 1 0V7a3 3 0 0 0-3-3z"/><path fill="#000" fill-rule="evenodd" d="M9.596 10.303a3.5 3.5 0 1 1 .707-.707l1.55 1.55a.5.5 0 0 1-.707.708zM10 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" clip-rule="evenodd"/><path fill="#000" d="M16.015 13.44 15.5 15.5l-2.06.515c-.505.126-.505.844 0 .97l2.06.515.515 2.06c.126.505.844.505.97 0l.515-2.06 2.06-.515c.505-.126.505-.844 0-.97L17.5 15.5l-.515-2.06c-.126-.505-.844-.505-.97 0"/>
  </svg>
);

export default VisualSearch;
