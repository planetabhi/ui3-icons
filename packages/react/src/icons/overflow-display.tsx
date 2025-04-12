
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const OverflowDisplay: React.FC<IconProps> = ({
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
    <path fill="#000" fill-opacity=".3" d="M16.5 6a.5.5 0 0 1 .5.5V7h.5a.5.5 0 0 1 0 1H17v5h.5a.5.5 0 0 1 0 1H17v.5a.5.5 0 0 1-1 0V14h-2v-1h2V8h-5v2h-1V8h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 1 0V7h5v-.5a.5.5 0 0 1 .5-.5"/><path fill="#000" fill-opacity=".3" d="M13 13h-2v-2h-1v2h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V14h2z"/><path fill="#000" fill-rule="evenodd" d="M6 11a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm1 0v6h6v-6z" clip-rule="evenodd"/>
  </svg>
);

export default OverflowDisplay;
