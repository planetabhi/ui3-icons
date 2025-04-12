
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const FitScreen: React.FC<IconProps> = ({
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
    <path fill="#000" d="M12.354 8.146a.5.5 0 0 0-.708 0l-1 1a.5.5 0 0 0 .708.708l.146-.147V11.5H8.707l.147-.146a.5.5 0 0 0-.708-.708l-1 1a.5.5 0 0 0 0 .708l1 1a.5.5 0 0 0 .708-.708l-.147-.146H11.5v1.793l-.146-.147a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l1-1a.5.5 0 0 0-.708-.708l-.146.147V12.5h2.793l-.147.146a.5.5 0 0 0 .708.708l1-1a.5.5 0 0 0 0-.708l-1-1a.5.5 0 0 0-.708.708l.147.146H12.5V9.707l.146.147a.5.5 0 0 0 .708-.708z"/><path fill="#000" fill-rule="evenodd" d="M5 7.5A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 16.5zM6.5 7h11a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5" clip-rule="evenodd"/>
  </svg>
);

export default FitScreen;
