
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Interdrag: React.FC<IconProps> = ({
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
    <path fill="#000" d="M17 9.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h1.793l-2.147 2.146a.5.5 0 0 0 .708.708L17 7.707zm-10 5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H7.707l2.147-2.146a.5.5 0 0 0-.708-.708L7 16.293zm3-8a.5.5 0 0 1-.5.5H7.707l2.147 2.146a.5.5 0 0 1-.708.708L7 7.707V9.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5"/><path fill="#000" fill-rule="evenodd" d="M12.351 11.064a1 1 0 0 0-1.287 1.287l2.25 6a1 1 0 0 0 1.906-.108l.605-2.418 2.418-.605a1 1 0 0 0 .108-1.906zM15 15l-.75 3L12 12l6 2.25z" clip-rule="evenodd"/>
  </svg>
);

export default Interdrag;
