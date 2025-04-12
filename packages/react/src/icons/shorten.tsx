
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Shorten: React.FC<IconProps> = ({
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
    <path fill="#000" d="M5.553 15.224a.5.5 0 0 0 .67.223l4-2a.5.5 0 1 0-.447-.894l-4 2a.5.5 0 0 0-.223.67"/><path fill="#000" fill-rule="evenodd" d="M6.224 8.553 12 11.441l1.454-.727-.25-1.751a2.45 2.45 0 0 1 1.33-2.537l.243-.122a2.177 2.177 0 1 1 1.947 3.893l-2.49 1.245-.02.01-1.096.548 1.095.548.021.01 2.49 1.245a2.177 2.177 0 0 1-1.948 3.895l-.243-.122a2.45 2.45 0 0 1-1.33-2.537l.251-1.753-7.678-3.838a.5.5 0 0 1 .448-.895m8.173 1.69-.203-1.422a1.45 1.45 0 0 1 .786-1.5l.244-.123a1.177 1.177 0 0 1 1.053 2.105zm0 3.515-.203 1.422a1.45 1.45 0 0 0 .786 1.501l.244.122a1.177 1.177 0 0 0 1.052-2.106z" clip-rule="evenodd"/><path fill="#000" d="M9.68 15.38 9.4 16.5l-1.12.28c-.333.082-.333.556 0 .64l1.12.28.28 1.119c.083.333.557.333.64 0l.28-1.12 1.12-.28c.333-.083.333-.557 0-.64l-1.12-.28-.28-1.12c-.083-.332-.557-.332-.64 0"/>
  </svg>
);

export default Shorten;
