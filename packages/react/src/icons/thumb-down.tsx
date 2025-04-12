
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const ThumbDown: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M9.8 14.249c.178.102.36.24.536.415.47.47.664.986.664 1.336a2 2 0 0 0 4 0q-.001-.512-.098-1a5.6 5.6 0 0 0-.297-1h2.175a2 2 0 0 0 1.909-2.597L17.635 8.03a2.5 2.5 0 0 0-2.74-1.73l-4.976.712A1.5 1.5 0 0 0 8.5 6h-1A1.5 1.5 0 0 0 6 7.5v6A1.5 1.5 0 0 0 7.5 15h1a1.5 1.5 0 0 0 1.3-.751m.2-1.02V8.01l5.036-.72a1.5 1.5 0 0 1 1.644 1.038l1.054 3.374A1 1 0 0 1 16.78 13h-3.651l.548 1.371c.206.516.323 1.064.323 1.629a1 1 0 1 1-2 0c0-.672-.344-1.43-.957-2.043A3.5 3.5 0 0 0 10 13.23m-1 .27a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" clip-rule="evenodd"/>
  </svg>
);

export default ThumbDown;
