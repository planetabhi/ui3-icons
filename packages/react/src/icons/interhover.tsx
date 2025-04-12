
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Interhover: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M9.5 7.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M12 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-7 8c0-.534.284-.988.674-1.343s.929-.652 1.55-.891C8.471 11.286 10.16 11 12 11s3.529.286 4.776.766c.621.239 1.159.536 1.55.891.39.355.674.809.674 1.343v2c0 .535-.284.988-.674 1.343s-.929.652-1.55.891C15.529 18.714 13.84 19 12 19s-3.529-.286-4.776-.766c-.621-.239-1.159-.536-1.55-.891C5.284 16.988 5 16.535 5 16zm1 1.603V16c0 .156.08.36.347.603s.682.485 1.236.698C8.69 17.726 10.25 18 12 18s3.311-.274 4.417-.699c.554-.213.969-.455 1.236-.698S18 16.156 18 16v-.397c-.344.243-.76.453-1.224.631-1.247.48-2.936.766-4.776.766s-3.529-.286-4.776-.766A5.7 5.7 0 0 1 6 15.603M6 14c0 .156.08.36.347.603s.682.485 1.236.698C8.69 15.726 10.25 16 12 16s3.311-.274 4.417-.699c.554-.213.969-.455 1.236-.698S18 14.156 18 14s-.08-.36-.347-.603-.682-.485-1.236-.698C15.31 12.274 13.75 12 12 12s-3.311.274-4.417.699c-.554.213-.969.455-1.236.698S6 13.844 6 14" clip-rule="evenodd"/>
  </svg>
);

export default Interhover;
