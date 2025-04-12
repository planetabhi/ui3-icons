
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const OpenSession: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M13.212 12.687a2.5 2.5 0 1 0-2.424 0A4 4 0 0 0 8 16.5a.5.5 0 0 0 1 0 3 3 0 1 1 6 0 .5.5 0 0 0 1 0 4 4 0 0 0-2.788-3.813M12 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M14.5 5H17a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2.5v-.5A1.5 1.5 0 0 1 11 3h2a1.5 1.5 0 0 1 1.5 1.5zM7 6a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm6.5-1v-.5A.5.5 0 0 0 13 4h-2a.5.5 0 0 0-.5.5V5z" clip-rule="evenodd"/>
  </svg>
);

export default OpenSession;
