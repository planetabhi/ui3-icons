import React, { useState, useEffect } from 'react';
import { IconData, CopyFormat } from '../types';
import { CodeBlock } from './CodeBlock';
import { formatNameToPascalCase } from '../utils/stringUtils';

interface IconCardProps {
  icon: IconData;
}

export const IconCard: React.FC<IconCardProps> = ({ icon }) => {
  const [svgContent, setSvgContent] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [selectedFormat, setSelectedFormat] = useState<CopyFormat>('svg');
  const [error, setError] = useState<string | null>(null);
  
  // Fetch SVG content
  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(icon.path);
        if (!response.ok) {
          throw new Error(`Failed to fetch SVG: ${response.statusText}`);
        }
        const content = await response.text();
        setSvgContent(content);
      } catch (err) {
        console.error(`Error loading ${icon.name}:`, err);
        setError('Failed to load icon');
      }
    };
    
    fetchSvg();
  }, [icon]);
  
  // Generate code based on selected format
  const getCode = (): string => {
    const componentName = formatNameToPascalCase(icon.name);
    
    switch (selectedFormat) {
      case 'svg':
        return svgContent;
        
      case 'react':
        return `import { ${componentName} } from '@ui3/react';\n\n<${componentName} />`;
        
      case 'vue':
        return `<script setup>\nimport { ${componentName} } from '@ui3/vue';\n</script>\n\n<template>\n  <${componentName} />\n</template>`;
        
      default:
        return svgContent;
    }
  };
  
  // Handle copy to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getCode());
      setCopied(true);
      
      // Reset "Copied" state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  
  // Handle format change
  const handleFormatChange = (format: CopyFormat) => {
    setSelectedFormat(format);
  };
  
  // Handle icon download
  const handleDownload = () => {
    const blob = new Blob([getCode()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const extension = selectedFormat === 'svg' ? 'svg' : 
                      selectedFormat === 'react' ? 'jsx' : 'vue';
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `${icon.name}.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  if (error) {
    return (
      <div className="icon-card error">
        <div className="icon-name">{icon.name}</div>
        <div className="error-message">{error}</div>
      </div>
    );
  }
  
  return (
    <div className="icon-card">
      <div className="icon-preview" dangerouslySetInnerHTML={{ __html: svgContent }} />
      <div className="icon-name">{icon.name}</div>
      
      <div className="icon-actions">
        <div className="format-selector">
          <button 
            className={selectedFormat === 'svg' ? 'active' : ''} 
            onClick={() => handleFormatChange('svg')}
          >
            SVG
          </button>
          <button 
            className={selectedFormat === 'react' ? 'active' : ''} 
            onClick={() => handleFormatChange('react')}
          >
            React
          </button>
          <button 
            className={selectedFormat === 'vue' ? 'active' : ''} 
            onClick={() => handleFormatChange('vue')}
          >
            Vue
          </button>
        </div>
        
        <div className="icon-buttons">
          <button 
            className="copy-button" 
            onClick={handleCopy}
            aria-label="Copy to clipboard"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button 
            className="download-button" 
            onClick={handleDownload}
            aria-label="Download icon"
          >
            Download
          </button>
        </div>
      </div>
      
      <div className="code-preview">
        <CodeBlock code={getCode()} language={selectedFormat === 'svg' ? 'markup' : 'jsx'} />
      </div>
    </div>
  );
};