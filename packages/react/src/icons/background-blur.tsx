
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const BackgroundBlur: React.FC<IconProps> = ({
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
    <path fill="#000" d="M11.25 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M7.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m6.75-.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.25.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-8.25 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.25 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M8.25 13.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.25 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m-5.25 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M7.5 17a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m6.75-.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.25.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/><path fill="#000" fill-rule="evenodd" d="M7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm10 1H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1" clip-rule="evenodd"/>
  </svg>
);

export default BackgroundBlur;
