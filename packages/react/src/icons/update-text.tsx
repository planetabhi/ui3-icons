
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const UpdateText: React.FC<IconProps> = ({
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
    <path fill="#000" d="M12 4.5a7.5 7.5 0 0 0-7.484 7A.527.527 0 0 1 4 12a.48.48 0 0 1-.486-.5A8.5 8.5 0 0 1 19 7.177V5.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h1.845A7.5 7.5 0 0 0 12 4.5M7.5 16H5.655a7.5 7.5 0 0 0 13.829-3.5c.018-.275.24-.5.516-.5s.502.224.485.5A8.5 8.5 0 0 1 5 16.823V18.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1"/><path fill="#000" d="M9.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V10h1.5v4H11a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.5v-4H14v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5z"/>
  </svg>
);

export default UpdateText;
