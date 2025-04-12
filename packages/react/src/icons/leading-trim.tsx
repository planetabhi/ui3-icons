
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const LeadingTrim: React.FC<IconProps> = ({
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
    <path fill="#000" d="M6 8a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zm0 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm10 .5a.5.5 0 0 1 .5-.5H18a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5"/><path fill="#000" fill-rule="evenodd" d="M8.133 14.422a.49.49 0 0 0 .468-.338l.292-.88h1.885l.291.88a.493.493 0 1 0 .935-.318l-1.344-3.85a.872.872 0 0 0-1.647 0l-1.346 3.85a.493.493 0 0 0 .466.656m2.386-1.998-.656-1.982a.028.028 0 0 0-.053 0l-.657 1.982zm3.088 3.376q.355.134.852.134.528 0 .94-.162t.646-.485q.237-.322.236-.813V11.08a.476.476 0 0 0-.476-.476h-.157a.32.32 0 0 0-.319.318v.29a.03.03 0 0 1-.029.028.03.03 0 0 1-.026-.016 1.4 1.4 0 0 0-.19-.29 1.1 1.1 0 0 0-.349-.268 1.2 1.2 0 0 0-.547-.112q-.432 0-.788.222a1.54 1.54 0 0 0-.566.656q-.21.435-.21 1.071 0 .627.21 1.042.208.412.564.619.355.204.79.204.318 0 .535-.095.219-.097.353-.241.129-.137.198-.275a.027.027 0 0 1 .052.012v.686q0 .41-.24.586a1 1 0 0 1-.607.18q-.256 0-.427-.07a.75.75 0 0 1-.271-.174c-.11-.112-.261-.198-.415-.168l-.114.022c-.27.053-.443.335-.266.547q.025.03.051.058.215.23.57.363m1.332-2.307a.8.8 0 0 1-.465.134.8.8 0 0 1-.477-.14.9.9 0 0 1-.29-.392 1.6 1.6 0 0 1-.1-.597q0-.338.097-.599a.9.9 0 0 1 .29-.412.76.76 0 0 1 .48-.152q.276 0 .467.144a.9.9 0 0 1 .291.408q.1.261.1.611 0 .354-.102.607a.84.84 0 0 1-.291.388" clip-rule="evenodd"/>
  </svg>
);

export default LeadingTrim;
