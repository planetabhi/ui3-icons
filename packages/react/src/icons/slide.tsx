
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Slide: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M11.53 8.054a1 1 0 0 0-1.53.848v3.196a1 1 0 0 0 1.53.848l2.557-1.598a1 1 0 0 0 0-1.696zm-.53.848 2.557 1.598L11 12.098z" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M5 4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h1.868l-1.301 2.254a.5.5 0 1 0 .866.5L8.023 17h7.954l1.59 2.754a.5.5 0 0 0 .866-.5L17.132 17H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm14 1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" clip-rule="evenodd"/>
  </svg>
);

export default Slide;
