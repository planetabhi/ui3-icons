
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const FirstDraft: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M18 4a2 2 0 0 1 2 2v8a.5.5 0 0 1-1 0V9h-9v10h4a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1 2v2H5V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1M5 18V9h4v10H6a1 1 0 0 1-1-1" clip-rule="evenodd"/><path fill="#000" d="M19.015 16.44 18.5 18.5l-2.06.515c-.505.126-.505.844 0 .97l2.06.515.515 2.06c.126.505.844.505.97 0l.515-2.06 2.06-.515c.505-.126.505-.844 0-.97L20.5 18.5l-.515-2.06c-.126-.505-.844-.505-.97 0"/>
  </svg>
);

export default FirstDraft;
