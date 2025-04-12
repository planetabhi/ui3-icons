
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const NotificationBell: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M12.992 6.124Q13 6.064 13 6a1 1 0 1 0-1.992.124A4 4 0 0 0 8 10v1.172a5.83 5.83 0 0 1-1.707 4.12A1 1 0 0 0 7 17h3a2 2 0 1 0 4 0h3a1 1 0 0 0 .707-1.707A5.83 5.83 0 0 1 16 11.172V10a4 4 0 0 0-3.008-3.876M12 18a1 1 0 0 1-1-1h2a1 1 0 0 1-1 1m5-2a6.83 6.83 0 0 1-2-4.828V10a3 3 0 1 0-6 0v1.172A6.83 6.83 0 0 1 7 16z" clip-rule="evenodd"/>
  </svg>
);

export default NotificationBell;
