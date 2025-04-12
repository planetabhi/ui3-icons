
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Plugin: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M12 3a2.5 2.5 0 0 1 2.22 3.647l-.081.145c-.056.092-.09.158-.113.208H17a1 1 0 0 1 1 1v1.88a1 1 0 0 1-1.334.943 1.25 1.25 0 1 0-.416 2.427q.209 0 .416-.074a1 1 0 0 1 1.334.942V16a1 1 0 0 1-1 1h-2.974c.023.05.057.116.113.208l.082.145a2.5 2.5 0 1 1-4.36-.145l.078-.137.035-.071H7a1 1 0 0 1-1-1v-1.882a1 1 0 0 1 1.334-.942q.207.074.416.074l.128-.007a1.25 1.25 0 0 0 1.115-1.115L9 12a1.25 1.25 0 0 0-1.122-1.243l-.128-.007q-.159 0-.313.042l-.103.031A1 1 0 0 1 6 9.881V8a1 1 0 0 1 1-1h2.974q-.014-.031-.035-.071l-.078-.137A2.5 2.5 0 0 1 12 3m0 1a1.5 1.5 0 0 0-1.284 2.273c.147.243.284.505.284.789V8H7v1.88a2.25 2.25 0 1 1 .75 4.37c-.263 0-.515-.049-.75-.132V16h4v.939c0 .283-.137.545-.284.788a1.5 1.5 0 1 0 2.568 0c-.147-.243-.284-.505-.284-.788V16h4v-1.882a2.2 2.2 0 0 1-.75.132A2.25 2.25 0 1 1 17 9.88V8h-4v-.938c0-.284.137-.546.284-.789A1.5 1.5 0 0 0 12 4" clip-rule="evenodd"/>
  </svg>
);

export default Plugin;
