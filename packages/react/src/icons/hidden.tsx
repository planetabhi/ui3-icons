
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Hidden: React.FC<IconProps> = ({
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
    <path fill="#000" d="M5.5 9c.276 0 .533.223.641.477q.065.153.172.348c.24.435.613.938 1.121 1.414C8.442 12.184 9.954 13 12 13s3.558-.816 4.566-1.76c.508-.477.88-.98 1.121-1.415q.107-.195.171-.348c.11-.254.366-.477.642-.477s.495.225.417.49c-.202.682-.77 1.65-1.705 2.515l1.142 1.141a.5.5 0 0 1-.708.708l-1.217-1.218a7.4 7.4 0 0 1-1.89.958l.446 1.785a.5.5 0 0 1-.97.242l-.443-1.77A8 8 0 0 1 12 14a8 8 0 0 1-1.572-.15l-.443 1.771a.5.5 0 0 1-.97-.242l.446-1.785a7.4 7.4 0 0 1-1.89-.958l-1.217 1.218a.5.5 0 0 1-.708-.708l1.142-1.142c-.935-.864-1.503-1.832-1.705-2.514-.078-.265.14-.49.417-.49"/>
  </svg>
);

export default Hidden;
