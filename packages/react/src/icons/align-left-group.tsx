
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const AlignLeftGroup: React.FC<IconProps> = ({
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
    <path fill="#000" d="M5.5 18a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-1 0v12a.5.5 0 0 0 .5.5M18 9.25a.75.75 0 0 1-.75.75h-8.5A.75.75 0 0 1 8 9.25v-.5A.75.75 0 0 1 8.75 8h8.5a.75.75 0 0 1 .75.75zm-4 5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75z"/><path fill="#000" fill-opacity=".3" fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5-.5h10.25c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H8.5a.5.5 0 0 1 0-1h10.25a.25.25 0 0 0 .25-.25V6.25a.25.25 0 0 0-.25-.25H8.5a.5.5 0 0 1-.5-.5" clip-rule="evenodd"/>
  </svg>
);

export default AlignLeftGroup;
