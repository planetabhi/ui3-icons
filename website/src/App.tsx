import React, { useState, useEffect } from 'react';
import { IconGrid } from './components/IconGrid';
import { SearchBar } from './components/SearchBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { IconData } from './types';

const App: React.FC = () => {
  const [icons, setIcons] = useState<IconData[]>([]);
  const [filteredIcons, setFilteredIcons] = useState<IconData[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIcons = async () => {
      try {
        const response = await fetch('/public/manifest.json');
        if (!response.ok) {
          throw new Error('Failed to fetch icons');
        }
        
        const data = await response.json();
        const iconData: IconData[] = data.icons.map((name: string) => ({
          name,
          path: `/public/icons/${name}.svg`,
        }));
        
        setIcons(iconData);
        setFilteredIcons(iconData);
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading icons:', err);
        setError('Failed to load icons. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchIcons();
  }, []);

  // Filter icons when search query changes
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredIcons(icons);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = icons.filter(icon => 
        icon.name.toLowerCase().includes(query)
      );
      setFilteredIcons(filtered);
    }
  }, [searchQuery, icons]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  if (isLoading) {
    return (
      <div className="app">
        <Header />
        <div className="loading">Loading icons...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <Header />
        <div className="error">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main>
        <SearchBar onSearch={handleSearch} />
        {filteredIcons.length > 0 ? (
          <IconGrid icons={filteredIcons} />
        ) : (
          <div className="no-results">
            <p>No icons found matching "{searchQuery}"</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;