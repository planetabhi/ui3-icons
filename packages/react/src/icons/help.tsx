
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Help: React.FC<IconProps> = ({
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
    <path fill="#000" d="M10 10a2 2 0 1 1 4 0c0 .635-.293 1.024-.762 1.254-.774.379-1.738 1.108-1.738 2.246v.5a.5.5 0 0 0 1 0v-.5c0-.519.463-.998 1.178-1.348C14.47 11.764 15 11.038 15 10a3 3 0 1 0-6 0 .5.5 0 0 0 1 0m2 7a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"/>
  </svg>
);

export default Help;
