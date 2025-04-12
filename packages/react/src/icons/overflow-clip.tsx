
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const OverflowClip: React.FC<IconProps> = ({
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
    <path fill="#000" fill-opacity=".3" fill-rule="evenodd" d="M6 11a1 1 0 0 1 1-1h.5a.5.5 0 0 1 0 1H7v.5a.5.5 0 0 1-1 0zm3-.5a.5.5 0 0 1 .5-.5h.5v1h-.5a.5.5 0 0 1-.5-.5M6.5 13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m6.5 1.5V14h1v.5a.5.5 0 0 1-1 0M6.5 16a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 0 1H7a1 1 0 0 1-1-1v-.5a.5.5 0 0 1 .5-.5m7 0a.5.5 0 0 1 .5.5v.5a1 1 0 0 1-1 1h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 .5-.5M9 17.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M16.5 6a.5.5 0 0 1 .5.5V7h.5a.5.5 0 0 1 0 1H17v5h.5a.5.5 0 0 1 0 1H17v.5a.5.5 0 0 1-1 0V14h-5v.5a.5.5 0 0 1-1 0V14h-.5a.5.5 0 0 1 0-1h.5V8h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 1 0V7h5v-.5a.5.5 0 0 1 .5-.5M11 8v2h2a1 1 0 0 1 1 1v2h2V8zm0 3v2h2v-2z" clip-rule="evenodd"/>
  </svg>
);

export default OverflowClip;
