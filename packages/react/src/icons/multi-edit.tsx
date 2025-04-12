
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const MultiEdit: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M14 6v2h2a2 2 0 0 1 2 2v4.432l2.351.882a1 1 0 0 1-.108 1.906l-2.418.605-.605 2.418a1 1 0 0 1-1.906.108L14.432 18H10a2 2 0 0 1-2-2v-2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2M6 5h6a1 1 0 0 1 1 1v2h-3a2 2 0 0 0-2 2v3H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m8.057 12-.993-2.649a1 1 0 0 1 1.287-1.287l2.649.993V10a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM17 17l-.75 3L14 14l6 2.25z" clip-rule="evenodd"/>
  </svg>
);

export default MultiEdit;
