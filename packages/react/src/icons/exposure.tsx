
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Exposure: React.FC<IconProps> = ({
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
    <path fill="#000" fill-opacity=".3" d="M11.5 7.025a5 5 0 0 0 0 9.95z"/><path fill="#000" fill-rule="evenodd" d="M12 4a.5.5 0 0 1 .5.5v1.52a5.97 5.97 0 0 1 3.375 1.399l.014-.015 1.06-1.06a.5.5 0 1 1 .708.706l-1.061 1.06-.015.015A5.97 5.97 0 0 1 17.98 11.5h1.52a.5.5 0 0 1 0 1h-1.52a5.97 5.97 0 0 1-1.399 3.375l.015.014 1.06 1.06a.5.5 0 0 1-.706.708l-1.061-1.06-.014-.016a5.97 5.97 0 0 1-3.376 1.399v1.52a.5.5 0 0 1-1 0V18l.001-.02a5.97 5.97 0 0 1-3.375-1.399l-.014.015-1.061 1.06a.5.5 0 0 1-.707-.706l1.06-1.06.016-.015A5.97 5.97 0 0 1 6.02 12.5H4.5a.5.5 0 0 1 0-1h1.52a5.97 5.97 0 0 1 1.4-3.375l-.015-.014-1.061-1.06a.5.5 0 1 1 .707-.708l1.06 1.06.015.016A5.97 5.97 0 0 1 11.5 6.02V4.5A.5.5 0 0 1 12 4m-5 8a5 5 0 0 1 4.5-4.975v9.95A5 5 0 0 1 7 12m5.5 4.975a5 5 0 0 0 0-9.95z" clip-rule="evenodd"/>
  </svg>
);

export default Exposure;
