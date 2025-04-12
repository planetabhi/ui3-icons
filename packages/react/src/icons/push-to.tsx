
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const PushTo: React.FC<IconProps> = ({
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
    <path fill="#000" d="m6.591 11.823 5.232-5.232a.25.25 0 0 1 .354 0l5.232 5.232a.25.25 0 0 1 0 .354l-2.763 2.762a.5.5 0 0 0 .707.707l2.763-2.762a1.25 1.25 0 0 0 0-1.768l-5.232-5.232a1.25 1.25 0 0 0-1.768 0l-5.232 5.232a1.25 1.25 0 0 0 0 1.768l2.762 2.762a.5.5 0 1 0 .708-.707L6.59 12.177a.25.25 0 0 1 0-.354"/><path fill="#000" fill-rule="evenodd" d="M12.496 13.938q.004.03.004.062v4a.5.5 0 0 1-1 0v-4q0-.032.004-.062a2 2 0 1 1 .992 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"/>
  </svg>
);

export default PushTo;
