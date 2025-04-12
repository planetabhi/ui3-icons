
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const UiKit: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M14.5 5A1.5 1.5 0 0 0 13 6.5v3a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 19 9.5v-3A1.5 1.5 0 0 0 17.5 5zm3 1h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M6.382 12.5a1.5 1.5 0 0 1-.382-1v-3A1.5 1.5 0 0 1 7.5 7h3A1.5 1.5 0 0 1 12 8.5v3c0 .231-.052.45-.146.646A1.5 1.5 0 0 1 12.5 12h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3c-.384 0-.735-.144-1-.382a1.5 1.5 0 0 1-1 .382h-3A1.5 1.5 0 0 1 6 16.5v-3c0-.384.144-.735.382-1M7.5 8h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m4.5 5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5m-1 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z" clip-rule="evenodd"/>
  </svg>
);

export default UiKit;
