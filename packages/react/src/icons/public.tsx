
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Public: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M19 12a7 7 0 1 0-14 0 7 7 0 0 0 14 0m-6.535 5.738c-.233.23-.389.262-.465.262s-.232-.032-.465-.262c-.238-.234-.498-.623-.737-1.182-.434-1.013-.738-2.433-.79-4.056h3.984c-.052 1.623-.356 3.044-.79 4.056-.24.56-.5.948-.737 1.182m1.527-6.238h-3.984c.052-1.623.356-3.044.79-4.056.24-.56.5-.948.737-1.182.233-.23.389-.262.465-.262s.232.032.465.262c.238.234.498.623.737 1.182.434 1.012.738 2.433.79 4.056m1 1c-.065 2.176-.558 4.078-1.282 5.253a6.005 6.005 0 0 0 4.27-5.253zm2.988-1a6.005 6.005 0 0 0-4.27-5.253c.724 1.175 1.217 3.077 1.282 5.253zm-8.972 0c.065-2.176.558-4.078 1.282-5.253A6.005 6.005 0 0 0 6.02 11.5zm-2.987 1a6.005 6.005 0 0 0 4.27 5.253c-.725-1.175-1.218-3.077-1.283-5.253z" clip-rule="evenodd"/>
  </svg>
);

export default Public;
