
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Updates: React.FC<IconProps> = ({
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
    <path fill="#000" d="M7.023 11.526A5 5 0 0 1 16 9h-2a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v2.183A6 6 0 0 0 6.027 11.43a.5.5 0 1 0 .996.096m10.95 1.044a.5.5 0 0 0-.996-.095A5 5 0 0 1 8 15h2a.5.5 0 0 0 0-1H6.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-2.183a6 6 0 0 0 10.973-2.748"/>
  </svg>
);

export default Updates;
