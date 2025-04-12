
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const AddVertical: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M6 7.5A1.5 1.5 0 0 1 7.5 6h9A1.5 1.5 0 0 1 18 7.5v2a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 9.5zm1 2v-2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5m-1 5A1.5 1.5 0 0 1 7.5 13h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 9.5 18h-2A1.5 1.5 0 0 1 6 16.5zm1 2v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5" clip-rule="evenodd"/><path fill="#000" d="M13.5 16a.5.5 0 0 1 0-1H15v-1.5a.5.5 0 0 1 1 0V15h1.5a.5.5 0 0 1 0 1H16v1.5a.5.5 0 0 1-1 0V16z"/>
  </svg>
);

export default AddVertical;
