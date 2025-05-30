
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Paint: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M13.207 3.293a1 1 0 0 0-1.414 0L9.397 5.689 7.353 3.646a.5.5 0 1 0-.708.708L8.69 6.396 4.207 10.88a3 3 0 0 0 0 4.242l4.672 4.672a3 3 0 0 0 4.242 0l7.586-7.586a1 1 0 0 0 0-1.414zm-3.81 3.81-4.483 4.483a2 2 0 0 0 0 2.828l4.672 4.672a2 2 0 0 0 2.828 0L20 11.5 12.5 4l-2.396 2.396 2.75 2.75a1.5 1.5 0 1 1-.707.707zM14 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M19 21a2 2 0 0 0 2-2c0-1.108-1.09-2.488-1.661-3.134a.448.448 0 0 0-.678 0C18.091 16.512 17 17.892 17 19a2 2 0 0 0 2 2m0-1a1 1 0 0 0 1-1c0-.27-.15-.694-.47-1.22a8 8 0 0 0-.53-.758 8 8 0 0 0-.53.758c-.32.526-.47.95-.47 1.22a1 1 0 0 0 1 1" clip-rule="evenodd"/>
  </svg>
);

export default Paint;
