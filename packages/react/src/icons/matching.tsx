
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Matching: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M7 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm0 1h3v3H7z" clip-rule="evenodd"/><path fill="#000" d="M7 13a1 1 0 0 0-1 1v.5a.5.5 0 0 0 1 0V14h.5a.5.5 0 0 0 0-1zm2.5 0a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V14a1 1 0 0 0-1-1zM7 16.5a.5.5 0 0 0-1 0v.5a1 1 0 0 0 1 1h.5a.5.5 0 0 0 0-1H7zm4 0a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 0 0 0 1h.5a1 1 0 0 0 1-1zm2-2.5a1 1 0 0 1 1-1h.5a.5.5 0 0 1 0 1H14v.5a.5.5 0 0 1-1 0zm3-.5a.5.5 0 0 1 .5-.5h.5a1 1 0 0 1 1 1v.5a.5.5 0 0 1-1 0V14h-.5a.5.5 0 0 1-.5-.5M13.5 16a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 0 1H14a1 1 0 0 1-1-1v-.5a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v.5a1 1 0 0 1-1 1h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 .5-.5M14 6a1 1 0 0 0-1 1v.5a.5.5 0 0 0 1 0V7h.5a.5.5 0 0 0 0-1zm2.5 0a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V7a1 1 0 0 0-1-1zM14 9.5a.5.5 0 0 0-1 0v.5a1 1 0 0 0 1 1h.5a.5.5 0 0 0 0-1H14zm4 0a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 0 0 0 1h.5a1 1 0 0 0 1-1z"/>
  </svg>
);

export default Matching;
