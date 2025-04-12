
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Interpress: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M12 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m-1.5 2.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" clip-rule="evenodd"/><path fill="#000" d="M15.955 11.1c.044-.292.327-.512.605-.414l.216.08c.621.239 1.159.536 1.55.891.39.355.674.809.674 1.343s-.284.988-.674 1.343-.929.652-1.55.892C15.529 15.714 13.84 16 12 16s-3.529-.286-4.776-.765c-.621-.24-1.159-.537-1.55-.892C5.284 13.988 5 13.534 5 13s.284-.988.674-1.343.929-.652 1.55-.891l.216-.08c.278-.098.56.122.605.413a.5.5 0 0 1-.322.548l-.14.052c-.554.213-.969.455-1.236.698S6 12.844 6 13s.08.36.347.603.682.485 1.236.698C8.69 14.726 10.25 15 12 15s3.311-.274 4.417-.699c.554-.213.969-.455 1.236-.698S18 13.156 18 13s-.08-.36-.347-.603-.682-.485-1.236-.698l-.14-.052a.5.5 0 0 1-.322-.548"/>
  </svg>
);

export default Interpress;
