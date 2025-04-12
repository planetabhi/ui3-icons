
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const ReleaseNotes: React.FC<IconProps> = ({
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
    <path fill="#000" d="M13.854 8.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708 0m0 5.708a.5.5 0 0 0-.708-.708L11.5 14.793l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0z"/><path fill="#000" fill-rule="evenodd" d="M8.5 5A1.5 1.5 0 0 0 7 6.5v11A1.5 1.5 0 0 0 8.5 19h7a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 15.5 5zm7 1h-7a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5" clip-rule="evenodd"/>
  </svg>
);

export default ReleaseNotes;
