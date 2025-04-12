
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Phone: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M6.727 5.687c-1.637 1.638-1.876 4.09-.513 5.781.799.99 1.76 2.09 2.857 3.189a40 40 0 0 0 3.189 2.857c1.69 1.363 4.143 1.124 5.78-.513a.315.315 0 0 0 0-.446l-2.006-2.006a.59.59 0 0 0-.76-.063 3 3 0 0 1-3.865-.32l-1.847-1.847a3 3 0 0 1-.32-3.865.59.59 0 0 0-.063-.76L7.173 5.687a.315.315 0 0 0-.446 0M6.02 4.98a1.315 1.315 0 0 1 1.86 0l2.006 2.007c.55.55.622 1.416.17 2.049a2 2 0 0 0 .213 2.576l1.847 1.847a2 2 0 0 0 2.576.213 1.59 1.59 0 0 1 2.05.17l2.006 2.006a1.315 1.315 0 0 1 0 1.86c-1.947 1.947-4.973 2.313-7.116.584a41 41 0 0 1-3.268-2.928 41 41 0 0 1-2.928-3.268C3.707 9.953 4.073 6.927 6.02 4.98" clip-rule="evenodd"/>
  </svg>
);

export default Phone;
