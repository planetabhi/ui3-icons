
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const H2: React.FC<IconProps> = ({
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
    <path fill="#000" d="M7 6.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0V12h6v5.5a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0V11H7zm9.034 10.952c0 .303.245.548.548.548h2.97a.448.448 0 0 0 0-.896H17.48v-.04l.997-1.038q.562-.555.873-.945.314-.39.438-.711t.124-.653q0-.497-.245-.885a1.7 1.7 0 0 0-.684-.61A2.24 2.24 0 0 0 17.96 12a2.2 2.2 0 0 0-1.017.228 1.71 1.71 0 0 0-.888 1.13c-.064.268.168.495.444.495.275 0 .479-.236.595-.485l.019-.039q.12-.22.333-.338a1 1 0 0 1 .5-.121q.278 0 .495.11a.83.83 0 0 1 .341.312.9.9 0 0 1 .125.48q0 .245-.096.462t-.288.448-.48.529l-1.85 1.854a.55.55 0 0 0-.16.387"/>
  </svg>
);

export default H2;
