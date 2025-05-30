
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const Eyedropper: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M15.897 3.896a2.975 2.975 0 1 1 4.207 4.208l-2.933 2.933a1.85 1.85 0 0 1-.272 2.271l-.09.09a1.85 1.85 0 0 1-2.617 0l-.192-.19-7.354 7.352a1.5 1.5 0 0 1-1.06.439H3.5a.5.5 0 0 1-.5-.5v-2.086c0-.398.158-.78.44-1.06L10.792 10l-.192-.192a1.85 1.85 0 0 1 0-2.616l.09-.09a1.85 1.85 0 0 1 2.272-.273zm3.5.708a1.975 1.975 0 0 0-2.793 0L13 8.207l-.399-.399a.85.85 0 0 0-1.202 0l-.09.09a.85.85 0 0 0 0 1.203l3.59 3.59a.85.85 0 0 0 1.202 0l.09-.09a.85.85 0 0 0 0-1.202L15.794 11l3.604-3.604a1.975 1.975 0 0 0 0-2.792M11.5 10.707 4.146 18.06a.5.5 0 0 0-.146.353V20h1.586a.5.5 0 0 0 .353-.146l7.354-7.354z" clip-rule="evenodd"/>
  </svg>
);

export default Eyedropper;
