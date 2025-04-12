
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Attention: React.FC<IconProps> = ({
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
    <path fill="#000" d="M12.65 9.36a.605.605 0 1 0-1.21 0l.078 3.488a.526.526 0 0 0 1.052 0zm-1.105 5.793a.7.7 0 0 0 .499.204.67.67 0 0 0 .348-.092.73.73 0 0 0 .256-.256.66.66 0 0 0 .1-.355.66.66 0 0 0-.212-.492.68.68 0 0 0-.492-.205.7.7 0 0 0-.499.205.67.67 0 0 0-.204.492q0 .294.204.499"/><path fill="#000" fill-rule="evenodd" d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0" clip-rule="evenodd"/>
  </svg>
);

export default Attention;
