
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Write: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M9.28 13.017c-.394 1.016.61 2.014 1.625 1.615l1.688-.666a1.5 1.5 0 0 0 .51-.335l4.45-4.45a1.5 1.5 0 0 0 0-2.12l-.707-.708a1.5 1.5 0 0 0-2.122 0l-4.447 4.448a1.5 1.5 0 0 0-.338.518zm1.258.684a.25.25 0 0 1-.325-.323l.659-1.698a.5.5 0 0 1 .112-.172l3.387-3.387 1.414 1.414-3.389 3.389a.5.5 0 0 1-.17.111zm5.954-4.873-1.414-1.414.354-.354a.5.5 0 0 1 .707 0l.707.707a.5.5 0 0 1 0 .708z" clip-rule="evenodd"/><path fill="#000" d="M11.5 6a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 1 0v4a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 16.5v-9A1.5 1.5 0 0 1 7.5 6z"/>
  </svg>
);

export default Write;
