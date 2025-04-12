
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Rewrite: React.FC<IconProps> = ({
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
    <path fill="#000" d="m6.953 5.91-.315 1.26-1.26.314c-.504.126-.504.844 0 .97l1.26.315.315 1.26c.127.505.844.505.97 0l.315-1.26 1.26-.315c.505-.126.505-.844 0-.97l-1.26-.315-.314-1.26c-.127-.504-.844-.504-.97 0"/><path fill="#000" fill-rule="evenodd" d="M14.793 6a1 1 0 0 1 1.414 0L18 7.791a1 1 0 0 1 0 1.415l-8.5 8.5a1 1 0 0 1-.707.293H7a1 1 0 0 1-1-1v-1.793a1 1 0 0 1 .293-.708zm-.586 2L16 9.791 17.293 8.5 15.5 6.707zm1.086 2.5L13.5 8.707l-6.5 6.5V17h1.793z" clip-rule="evenodd"/><path fill="#000" d="m15.839 15.87.28-1.12c.083-.333.556-.333.64 0l.28 1.12 1.119.28c.333.082.333.556 0 .64l-1.12.28-.28 1.119c-.083.333-.556.333-.64 0l-.28-1.12-1.119-.28c-.333-.083-.333-.557 0-.64z"/>
  </svg>
);

export default Rewrite;
