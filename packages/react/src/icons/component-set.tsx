
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const ComponentSet: React.FC<IconProps> = ({
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
    <path fill="#000" d="M7 4.5a.5.5 0 0 1-.5.5H6a1 1 0 0 0-1 1v.5a.5.5 0 0 1-1 0V6a2 2 0 0 1 2-2h.5a.5.5 0 0 1 .5.5m3.75.5a.5.5 0 0 0 0-1H9a.5.5 0 0 0 0 1zM15 5a.5.5 0 0 0 0-1h-1.75a.5.5 0 0 0 0 1zm4 1.5a.5.5 0 0 0 1 0V6a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1h.5a1 1 0 0 1 1 1zm0 4.25a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0zM19 15a.5.5 0 0 0 1 0v-1.75a.5.5 0 0 0-1 0zm-1.5 4a.5.5 0 0 0 0 1h.5a2 2 0 0 0 2-2v-.5a.5.5 0 0 0-1 0v.5a1 1 0 0 1-1 1zm-4.25 0a.5.5 0 0 0 0 1H15a.5.5 0 0 0 0-1zM9 19a.5.5 0 0 0 0 1h1.75a.5.5 0 0 0 0-1zm-4-1.5a.5.5 0 0 0-1 0v.5a2 2 0 0 0 2 2h.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1zm0-4.25a.5.5 0 0 0-1 0V15a.5.5 0 0 0 1 0zM5 9a.5.5 0 0 0-1 0v1.75a.5.5 0 0 0 1 0z"/><path fill="#000" fill-rule="evenodd" d="M11.646 10.94 10.207 9.5a.5.5 0 0 1 0-.707l1.44-1.44a.5.5 0 0 1 .707 0l1.439 1.44a.5.5 0 0 1 0 .707l-1.44 1.44a.5.5 0 0 1-.707 0m1.086-1.794L12 9.88l-.732-.733.732-.732zM10.207 14.5l1.44-1.44a.5.5 0 0 1 .707 0l1.439 1.44a.5.5 0 0 1 0 .707l-1.44 1.44a.5.5 0 0 1-.707 0l-1.439-1.44a.5.5 0 0 1 0-.707m1.06.354L12 14.12l.732.733-.732.732zM9.5 10.207l1.44 1.44a.5.5 0 0 1 0 .707L9.5 13.793a.5.5 0 0 1-.707 0l-1.44-1.44a.5.5 0 0 1 0-.707l1.44-1.439a.5.5 0 0 1 .707 0m-.354 2.525L8.414 12l.732-.732.733.732zm3.914-1.086 1.44-1.439a.5.5 0 0 1 .707 0l1.44 1.44a.5.5 0 0 1 0 .707l-1.44 1.439a.5.5 0 0 1-.707 0l-1.44-1.44a.5.5 0 0 1 0-.707m1.794 1.086L14.12 12l.733-.732.732.732z" clip-rule="evenodd"/>
  </svg>
);

export default ComponentSet;
