
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Hash: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M11.498 9.55a.5.5 0 1 0-.995-.1l-.056.55H9.5a.5.5 0 0 0 0 1h.848l-.2 2H9.5a.5.5 0 0 0 0 1h.547l-.045.45a.5.5 0 0 0 .995.1l.056-.55h1.494l-.045.45a.5.5 0 0 0 .995.1l.056-.55h.947a.5.5 0 0 0 0-1h-.848l.2-2h.648a.5.5 0 0 0 0-1h-.547l.045-.45a.5.5 0 1 0-.995-.1l-.056.55h-1.494zM11.153 13l.2-2h1.495l-.2 2z" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M8 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM7 8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z" clip-rule="evenodd"/>
  </svg>
);

export default Hash;
