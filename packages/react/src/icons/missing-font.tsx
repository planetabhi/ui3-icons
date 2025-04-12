
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const MissingFont: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M6.618 15.282h1.265l.542-1.614h2.46l.543 1.614h1.265l-2.307-6.545H8.922zm3.947-2.566-.886-2.637h-.05l-.885 2.637z" clip-rule="evenodd"/><path fill="#000" d="M14.408 13.275v.083h1.064v-.083q.003-.338.08-.569.08-.232.243-.406.165-.173.425-.332a2.4 2.4 0 0 0 .508-.4q.214-.224.33-.511a1.7 1.7 0 0 0 .117-.652q0-.54-.262-.933a1.7 1.7 0 0 0-.725-.61 2.5 2.5 0 0 0-1.074-.215q-.56 0-1.023.205-.46.204-.741.613-.279.41-.294 1.017h1.138q.016-.3.146-.496a.84.84 0 0 1 .336-.294q.204-.099.432-.099.246 0 .444.102.2.104.32.288.117.186.118.438a.9.9 0 0 1-.09.406q-.09.18-.246.326a2.2 2.2 0 0 1-.348.265q-.284.175-.483.387a1.4 1.4 0 0 0-.307.55q-.105.342-.108.92m.06 1.873a.68.68 0 0 0 .496.204q.192 0 .348-.092a.74.74 0 0 0 .256-.256.66.66 0 0 0 .099-.355.66.66 0 0 0-.211-.492.68.68 0 0 0-.492-.204.68.68 0 0 0-.496.204.67.67 0 0 0-.207.492q0 .294.207.499"/><path fill="#000" fill-rule="evenodd" d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1" clip-rule="evenodd"/>
  </svg>
);

export default MissingFont;
