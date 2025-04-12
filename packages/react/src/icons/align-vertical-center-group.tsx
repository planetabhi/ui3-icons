
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const AlignVerticalCenterGroup: React.FC<IconProps> = ({
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
    <path fill="#000" d="M18 11.5a.5.5 0 0 0-.5-.5H15V9.75a.75.75 0 0 0-.75-.75h-.5a.75.75 0 0 0-.75.75V11h-3V7.75A.75.75 0 0 0 9.25 7h-.5a.75.75 0 0 0-.75.75V11H5.5a.5.5 0 0 0 0 1H8v3.25c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75V12h3v1.25c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75V12h2.5a.5.5 0 0 0 .5-.5"/><path fill="#000" fill-opacity=".3" d="M6.25 5C5.56 5 5 5.56 5 6.25V8.5a.5.5 0 0 0 1 0V6.25A.25.25 0 0 1 6.25 6h10.5a.25.25 0 0 1 .25.25V8.5a.5.5 0 0 0 1 0V6.25C18 5.56 17.44 5 16.75 5zm10.5 13c.69 0 1.25-.56 1.25-1.25V14.5a.5.5 0 0 0-1 0v2.25a.25.25 0 0 1-.25.25H6.25a.25.25 0 0 1-.25-.25V14.5a.5.5 0 0 0-1 0v2.25c0 .69.56 1.25 1.25 1.25z"/>
  </svg>
);

export default AlignVerticalCenterGroup;
