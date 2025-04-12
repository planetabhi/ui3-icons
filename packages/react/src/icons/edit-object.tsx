
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const EditObject: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M15 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2q-.135 0-.259-.034l-2.035 2.036A8 8 0 0 1 16.5 8.5c1.58 0 3.053.458 4.293 1.248.13.084.207.23.207.384 0 .398-.475.626-.814.416A6.97 6.97 0 0 0 16.5 9.5a7 7 0 0 0-3.117.73l-.003.002q.119.364.12.768a2.5 2.5 0 0 1-3.268 2.38l-.001.003A7 7 0 0 0 9.5 16.5c0 1.353.384 2.616 1.048 3.686.21.339-.018.814-.416.814a.45.45 0 0 1-.384-.207A7.96 7.96 0 0 1 8.5 16.5c0-.983.177-1.925.502-2.795l-2.036 2.036A1 1 0 0 1 7 16v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2q.135 0 .259.034l2.655-2.655a2.5 2.5 0 0 1 3.464-3.465l2.656-2.655a1 1 0 0 1-.034-.26zm1 0h2v2h-2zm-5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6 16H4v2h2z" clip-rule="evenodd"/>
  </svg>
);

export default EditObject;
