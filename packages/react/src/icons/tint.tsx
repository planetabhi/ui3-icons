
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Tint: React.FC<IconProps> = ({
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
    <path fill="#000" d="m12 5 .74-.673a1 1 0 0 0-1.48 0z"/><path fill="#000" fill-rule="evenodd" d="M16.883 13c-.564-2.591-3.028-5.795-4.225-7.235C12.258 5.285 12 5 12 5l.74-.673.002.002.003.004.013.014.045.05.166.19a35 35 0 0 1 2.354 3.033c.643.932 1.302 1.999 1.802 3.075.494 1.06.875 2.217.875 3.305a6 6 0 0 1-12 0c0-1.088.381-2.244.875-3.305.5-1.076 1.159-2.143 1.802-3.075a35 35 0 0 1 2.52-3.222l.045-.051.013-.014.003-.004.002-.002L12 5s-.258.284-.658.765C10.145 7.205 7.681 10.409 7.117 13zM17 14H7a5 5 0 0 0 10 0" clip-rule="evenodd"/><path fill="#000" fill-opacity=".3" d="M12 19a5 5 0 0 0 5-5H7a5 5 0 0 0 5 5"/>
  </svg>
);

export default Tint;
