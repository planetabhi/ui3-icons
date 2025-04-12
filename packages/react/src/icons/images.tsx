
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Images: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M16 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M16.5 18h-7A1.5 1.5 0 0 1 8 16.5V16h-.5A1.5 1.5 0 0 1 6 14.5v-7A1.5 1.5 0 0 1 7.5 6h7A1.5 1.5 0 0 1 16 7.5V8h.5A1.5 1.5 0 0 1 18 9.5v7a1.5 1.5 0 0 1-1.5 1.5m-2-11h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H8V9.5A1.5 1.5 0 0 1 9.5 8H15v-.5a.5.5 0 0 0-.5-.5M9 16.5v-1.293l2-2L14.793 17H9.5a.5.5 0 0 1-.5-.5m2.354-4.354L16.207 17h.293a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v4.293l1.646-1.647a.5.5 0 0 1 .708 0" clip-rule="evenodd"/>
  </svg>
);

export default Images;
