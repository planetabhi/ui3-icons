
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const AlignHorizontalCenterGroup: React.FC<IconProps> = ({
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
    <path fill="#000" d="M12.5 18a.5.5 0 0 0 .5-.5V15h2.25a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75H13v-3h4.25a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75H13V5.5a.5.5 0 0 0-1 0V8H7.75a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75H12v3H9.75a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75H12v2.5a.5.5 0 0 0 .5.5"/><path fill="#000" fill-opacity=".3" d="M9.5 18a.5.5 0 0 0 0-1H6.25a.25.25 0 0 1-.25-.25V6.25A.25.25 0 0 1 6.25 6H9.5a.5.5 0 0 0 0-1H6.25C5.56 5 5 5.56 5 6.25v10.5c0 .69.56 1.25 1.25 1.25zm6-13a.5.5 0 0 0 0 1h3.25a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25H15.5a.5.5 0 0 0 0 1h3.25c.69 0 1.25-.56 1.25-1.25V6.25C20 5.56 19.44 5 18.75 5z"/>
  </svg>
);

export default AlignHorizontalCenterGroup;
