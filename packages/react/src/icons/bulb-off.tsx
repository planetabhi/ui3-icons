
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const BulbOff: React.FC<IconProps> = ({
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
    <path fill="#000" d="M11 10a1 1 0 0 1 1-1 .5.5 0 0 0 0-1 2 2 0 0 0-2 2 .5.5 0 0 0 1 0"/><path fill="#000" fill-rule="evenodd" d="M14.233 14.978c.17-.194.29-.426.35-.668.115-.468.329-.94.593-1.517l.015-.032c.23-.502.5-1.089.668-1.707A4.004 4.004 0 0 0 12 6a4 4 0 0 0-3.86 5.054c.17.618.439 1.205.669 1.707l.015.033c.264.576.477 1.048.593 1.516.06.242.18.474.35.668-.167.213-.267.48-.267.772v1a1.75 1.75 0 0 0 1.5 1.732v.018a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.518 1.75 1.75 0 0 0 1.5-1.732v-1c0-.291-.1-.56-.267-.772m-3.483.522a.25.25 0 0 0-.25.25v1c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-1a.25.25 0 0 0-.25-.25zm2.342-1c.251 0 .46-.186.52-.43.142-.575.399-1.134.655-1.694.24-.523.48-1.047.628-1.585q.104-.379.105-.791a3 3 0 1 0-5.895.791c.147.538.387 1.062.628 1.585.256.56.513 1.119.655 1.694.06.244.269.43.52.43z" clip-rule="evenodd"/>
  </svg>
);

export default BulbOff;
