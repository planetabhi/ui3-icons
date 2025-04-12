
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Subscript: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M7.672 13.413c0-.252.204-.457.456-.457h3.1a.456.456 0 1 1 0 .912h-3.1a.456.456 0 0 1-.456-.456" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M7.51 15.65a.523.523 0 1 1-.985-.351l2.377-6.535a.83.83 0 0 1 1.56 0l2.374 6.535a.523.523 0 1 1-.985.351L9.723 9.57a.043.043 0 0 0-.081 0z" clip-rule="evenodd"/><path fill="#000" d="M14.324 17.338a.436.436 0 0 1-.287-.765l1.64-1.432q.259-.228.433-.406.176-.179.266-.346a.76.76 0 0 0 .091-.365.61.61 0 0 0-.258-.52 1 1 0 0 0-.63-.194q-.4 0-.643.209a.7.7 0 0 0-.133.152c-.127.196-.3.403-.534.403s-.432-.194-.367-.419q.11-.378.434-.641.494-.403 1.258-.403.513 0 .896.182.388.183.605.502.216.315.216.714 0 .315-.13.585-.125.27-.394.555-.27.28-.696.635l-.926.798a.023.023 0 0 0 .015.041h1.896a.357.357 0 0 1 0 .715z"/>
  </svg>
);

export default Subscript;
