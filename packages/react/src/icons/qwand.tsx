
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Qwand: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M20 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M17.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"/><path fill="#000" d="M17.5 16a.5.5 0 0 1 .5.5V18h1.5a.5.5 0 0 1 0 1H18v1.5a.5.5 0 0 1-1 0V19h-1.5a.5.5 0 0 1 0-1H17v-1.5a.5.5 0 0 1 .5-.5"/><path fill="#000" fill-rule="evenodd" d="M8.83 5.26 7.713 9.17 3.787 10.3c-1.702.491-1.695 2.906.01 3.386l3.917 1.103 1.116 3.906c.486 1.702 2.898 1.702 3.384 0l1.117-3.908 3.908-1.117c1.702-.486 1.702-2.898 0-3.384l-3.908-1.117-1.117-3.908c-.486-1.702-2.898-1.702-3.384 0m-4.761 7.464c-.737-.208-.74-1.25-.005-1.462l4.458-1.284 1.27-4.443c.21-.735 1.25-.735 1.46 0l1.27 4.443 4.442 1.269c.735.21.735 1.252 0 1.462l-4.442 1.269-1.27 4.442c-.21.735-1.25.735-1.46 0l-1.27-4.442z" clip-rule="evenodd"/>
  </svg>
);

export default Qwand;
