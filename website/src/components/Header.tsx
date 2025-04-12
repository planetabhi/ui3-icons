import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>UI3 Icons</h1>
        <p>Polished, cleaned up, and optimized UI3 icons, using base shapes sourced from the UI3 community file provided by Figma.</p>
        <nav>
          <ul>
            <li>
              <a href="https://www.npmjs.com/package/@ui3/icon" target="_blank" rel="noopener noreferrer">
                Optimized SVGs
              </a>
              </li>
            <li>
              <a href="https://www.npmjs.com/package/@ui3/react" target="_blank" rel="noopener noreferrer">
                React library
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@ui3/vue" target="_blank" rel="noopener noreferrer">
                Vue library
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};