
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const DocPlus: React.FC<IconProps> = ({
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
    <path fill="#000" d="M12.05 10a.5.5 0 0 1 .5.5v2.05h1.95a.5.5 0 0 1 0 1h-1.95v1.95a.5.5 0 0 1-1 0v-1.95H9.5a.5.5 0 0 1 0-1h2.05V10.5a.5.5 0 0 1 .5-.5"/><path fill="#000" fill-rule="evenodd" d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6.345a1.5 1.5 0 0 1 1.056.435l4.156 4.125A1.5 1.5 0 0 1 19 8.625V19a2 2 0 0 1-2 2M7 20h10a1 1 0 0 0 1-1V9h-3a2 2 0 0 1-2-2V4H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1m7-15.554L17.58 8H15a1 1 0 0 1-1-1z" clip-rule="evenodd"/>
  </svg>
);

export default DocPlus;
