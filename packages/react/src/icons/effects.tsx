
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Effects: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M10.106 5.553A1 1 0 0 1 11 5h4a1 1 0 0 1 .857 1.515L13.768 10H16a1 1 0 0 1 .707 1.707l-7 7a1 1 0 0 1-1.635-1.078L9.523 14H7.5a1 1 0 0 1-.894-1.447zM11 13l-2 5 7-7h-4l3-5h-4l-3.5 7z" clip-rule="evenodd"/>
  </svg>
);

export default Effects;
