
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const GenerateImage: React.FC<IconProps> = ({
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
    <path fill="#000" d="M17.015 4.44 16.7 5.7l-1.26.315c-.505.126-.505.844 0 .97l1.26.315.315 1.26c.126.504.844.504.97 0L18.3 7.3l1.26-.315c.505-.126.505-.844 0-.97L18.3 5.7l-.315-1.26c-.126-.505-.844-.505-.97 0"/><path fill="#000" fill-rule="evenodd" d="M6 7.5A1.5 1.5 0 0 1 7.5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 0-.5.5v6.293l2.646-2.646a.5.5 0 0 1 .708 0L16.207 17h.293a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 1 1 0v6a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 16.5zm1 9v-1.293l3-3L14.793 17H7.5a.5.5 0 0 1-.5-.5" clip-rule="evenodd"/>
  </svg>
);

export default GenerateImage;
