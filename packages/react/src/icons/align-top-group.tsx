
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const AlignTopGroup: React.FC<IconProps> = ({
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
    <path fill="#000" d="M18 5.5a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1 0-1h12a.5.5 0 0 1 .5.5M9.25 16a.75.75 0 0 0 .75-.75v-6.5A.75.75 0 0 0 9.25 8h-.5a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75zm5-4a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75h-.5a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75z"/><path fill="#000" fill-opacity=".3" fill-rule="evenodd" d="M18 16.75c0 .69-.56 1.25-1.25 1.25H6.25C5.56 18 5 17.44 5 16.75V8.5a.5.5 0 0 1 1 0v8.25c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V8.5a.5.5 0 0 1 1 0z" clip-rule="evenodd"/>
  </svg>
);

export default AlignTopGroup;
