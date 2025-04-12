
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Reset: React.FC<IconProps> = ({
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
    <path fill="#000" d="M3.103 10.19a1.5 1.5 0 0 0 0 2.121l4.043 4.044.02.018 2.285 2.285a4.42 4.42 0 0 0 7.196-1.41C17.88 14.288 15.715 11 12.5 11h-2.293l2.147-2.146a.5.5 0 0 0-.708-.707l-3 3a.5.5 0 0 0 0 .707l3 3a.5.5 0 0 0 .708-.707L10.207 12H12.5c2.494 0 4.186 2.554 3.224 4.862q-.162.387-.412.722a3.42 3.42 0 0 1-5.154.366l-4.304-4.304-.02-.018-2.024-2.025a.5.5 0 0 1 0-.707l7.586-7.586a.5.5 0 0 1 .707 0l7.586 7.586a.5.5 0 0 1 0 .707l-.851.852a.5.5 0 1 0 .707.707l.851-.852a1.5 1.5 0 0 0 0-2.121L12.81 2.604a1.5 1.5 0 0 0-2.121 0z"/>
  </svg>
);

export default Reset;
