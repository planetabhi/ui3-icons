import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeBlockProps {
  code: string;
  language: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <SyntaxHighlighter 
      language={language} 
      style={atomOneDark}
      customStyle={{
        borderRadius: '6px',
        fontSize: '13px',
        padding: '12px',
        margin: '0'
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};