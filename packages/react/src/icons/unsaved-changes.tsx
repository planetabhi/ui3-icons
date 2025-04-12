
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const UnsavedChanges: React.FC<IconProps> = ({
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
    <path fill="#000" d="m17.039 10.914-.05-.724a4.5 4.5 0 0 0-8.505-1.72l-.253.5-.558.044A4 4 0 0 0 8 17h2a.5.5 0 0 1 0 1H8a5 5 0 0 1-.409-9.984 5.5 5.5 0 0 1 10.396 2.106A4.002 4.002 0 0 1 17 18h-3a.5.5 0 0 1 0-1h3a3 3 0 0 0 .741-5.908z"/><path fill="#000" d="M12.354 11.146a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 .708.708l1.646-1.647V19a.5.5 0 0 0 1 0v-6.293l1.646 1.647a.5.5 0 0 0 .708-.708z"/>
  </svg>
);

export default UnsavedChanges;
