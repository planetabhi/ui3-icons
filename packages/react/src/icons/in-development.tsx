
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const InDevelopment: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M5.146 4.146a.5.5 0 0 1 .631-.062l3 2a.5.5 0 0 1 .077.77l-.647.646 2.732 2.732 1.197-1.196a4 4 0 0 1 4.482-4.988 1 1 0 0 1 .553 1.695L16 6.914V8h1.086l1.171-1.171a1 1 0 0 1 1.695.553Q20 7.686 20 8a4 4 0 0 1-5.036 3.864L14.83 12l4.585 4.586a2 2 0 0 1-2.828 2.828L12 14.828l-4.586 4.586a2 2 0 1 1-2.828-2.828l5.646-5.647L7.5 8.207l-.646.647a.5.5 0 0 1-.77-.077l-2-3a.5.5 0 0 1 .062-.63zm7.561 9.975 4.586 4.586a1 1 0 1 0 1.414-1.414l-4.586-4.586zM5.564 5.143l-.42.42 1.434 2.152 1.137-1.137zM13 8a3 3 0 0 1 3.464-2.964L15 6.5V9h2.5l1.464-1.464a3 3 0 0 1-.187 1.601 3 3 0 0 1-4.07 1.57l-8 8a1 1 0 0 1-1.414-1.414l8-8A3 3 0 0 1 13 8" clip-rule="evenodd"/>
  </svg>
);

export default InDevelopment;
