const icons = import.meta.glob('@ui3-icons/**/*.svg', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  
  const iconsContainer = document.getElementById('icons') as HTMLDivElement;
  const searchInput = document.getElementById('search') as HTMLInputElement;
  const countSpan = document.getElementById('count') as HTMLSpanElement;
  
  // Debug logging
  console.log(`Loaded ${Object.keys(icons).length} icons`);
  
  // Display icons
  function displayIcons(searchTerm = '') {
    iconsContainer.innerHTML = '';
    const filteredIcons = Object.entries(icons)
      .filter(([path]) => {
        const iconName = path.split('/').pop()?.replace('.svg', '') || '';
        return iconName.toLowerCase().includes(searchTerm.toLowerCase());
      });
    
    countSpan.textContent = `${filteredIcons.length} icons`;
    
    filteredIcons.forEach(([path, svgContent]) => {
      const iconName = path.split('/').pop()?.replace('.svg', '') || 'icon';
      const card = document.createElement('div');
      card.className = 'icon-card';
      card.title = `Click to download ${iconName}.svg`;
      card.innerHTML = `
        <div class="icon-svg">${svgContent}</div>
        <div class="icon-name">${iconName}</div>
      `;
      card.addEventListener('click', () => {
        downloadSVG(iconName, svgContent as string);
      });
      iconsContainer.appendChild(card);
    });
  }
  
  // Download SVG
  function downloadSVG(filename: string, content: string) {
    const blob = new Blob([content], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  
  // Initialize
  displayIcons();
  
  // Search
  searchInput.addEventListener('input', (e) => {
    displayIcons((e.target as HTMLInputElement).value);
  });