
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const ReplaceContent: React.FC<IconProps> = ({
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
    <path fill="#000" d="M6 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm8 0a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm-8 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm11.5.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m-1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-4.8-.3.315-1.26c.126-.505.844-.505.97 0l.315 1.26 1.26.315c.505.126.505.844 0 .97l-1.26.315-.315 1.26c-.126.505-.844.505-.97 0L11.7 14.3l-1.26-.315c-.505-.126-.505-.844 0-.97zM6 16.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m4 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0"/>
  </svg>
);

export default ReplaceContent;
