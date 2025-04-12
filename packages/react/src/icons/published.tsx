
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Published: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M11 15.444c-.265-.791-.449-1.805-.49-2.944h1.636a4.5 4.5 0 0 1 1.29-1H10.51c.05-1.349.298-2.523.646-3.358.196-.47.404-.786.584-.969a.8.8 0 0 1 .198-.154C11.977 7 11.995 7 12 7s.024 0 .063.02c.043.02.11.065.198.153.18.183.388.498.584.969.345.83.593 1.994.645 3.33q.465-.232.983-.354c-.097-1.578-.45-2.956-.953-3.883a5.01 5.01 0 0 1 3.422 4.001c.376.127.73.302 1.053.518a6 6 0 1 0-6.24 6.241A4.5 4.5 0 0 1 11 15.444m-.52-8.209c-.544 1.002-.912 2.528-.971 4.265H7.025c.2-2.01 1.59-3.67 3.455-4.265m0 9.53A5 5 0 0 1 7.025 12.5h2.484c.06 1.736.427 3.263.971 4.265" clip-rule="evenodd"/><path fill="#000" d="M16.947 14.724a.5.5 0 1 0-.894-.448l-.69 1.38-.51-.51a.5.5 0 0 0-.707.708l1 1a.5.5 0 0 0 .801-.13z"/><path fill="#000" fill-rule="evenodd" d="M15.5 19a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m0-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" clip-rule="evenodd"/>
  </svg>
);

export default Published;
