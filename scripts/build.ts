import fs from 'fs/promises';
import path from 'path';
import { execSync } from 'child_process';

const OPTIMIZED_DIR = path.resolve(process.cwd(), 'optimized');
const PACKAGES_DIR = path.resolve(process.cwd(), 'packages');
const ICONS_DIR = path.join(PACKAGES_DIR, 'icons');
const REACT_DIR = path.join(PACKAGES_DIR, 'react');
const VUE_DIR = path.join(PACKAGES_DIR, 'vue');

async function ensureDir(dir: string) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Helper to convert kebab-case to PascalCase
function toPascalCase(str: string): string {
  return str
    .split('-')
    .map(part => capitalize(part))
    .join('');
}

// Helper to generate imports
function generateImports(iconNames: string[]): string {
  return iconNames
    .map(name => `export { default as ${toPascalCase(name)} } from './icons/${name}';`)
    .join('\n');
}

async function buildIconsPackage() {
  console.log('Building @ui3/icons package...');
  await ensureDir(ICONS_DIR);
  await ensureDir(path.join(ICONS_DIR, 'src'));
  await ensureDir(path.join(ICONS_DIR, 'src/icons'));
  
  // Read manifest to get icon names
  const manifestPath = path.join(OPTIMIZED_DIR, 'manifest.json');
  const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  const iconNames = manifest.icons;
  
  // Copy optimized SVGs
  for (const name of iconNames) {
    const svgContent = await fs.readFile(path.join(OPTIMIZED_DIR, `${name}.svg`), 'utf8');
    await fs.writeFile(path.join(ICONS_DIR, `src/icons/${name}.svg`), svgContent, 'utf8');
  }
  
  // Create index.ts with exports
  const indexContent = iconNames
    .map(name => `export { default as ${toPascalCase(name)} } from './icons/${name}.svg';`)
    .join('\n');
  
  await fs.writeFile(path.join(ICONS_DIR, 'src/index.ts'), indexContent, 'utf8');
  
  // Create package.json
  const packageJson = {
    "name": "@ui3/icons",
    "version": "0.1.0",
    "description": "Polished, cleaned up, and optimized UI3 icons",
    "type": "module",
    "main": "./dist/index.js",
    "module": "./dist/index.js",
    "types": "./dist/index.d.ts",
    "author": "@planetabhi",
    "exports": {
      ".": {
        "import": "./dist/index.js",
        "types": "./dist/index.d.ts"
      },
      "./icons/*": {
        "import": "./dist/icons/*"
      }
    },
    "files": ["dist"],
    "scripts": {
      "build": "tsup"
    },
    "devDependencies": {
      "tsup": "^8.0.1",
      "typescript": "^5.2.2"
    },
    "publishConfig": {
      "access": "public"
    },
    "license": "MIT"
  };
  
  await fs.writeFile(
    path.join(ICONS_DIR, 'package.json'),
    JSON.stringify(packageJson, null, 2),
    'utf8'
  );
  
  // Create tsup.config.ts
  const tsupConfig = `
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  treeshake: true,
  sourcemap: true,
  assets: {
    from: ['src/icons/*.svg'],
    to: ['icons']
  }
});
`;
  
  await fs.writeFile(path.join(ICONS_DIR, 'tsup.config.ts'), tsupConfig, 'utf8');
  
  // Create tsconfig.json
  const tsconfig = {
    "extends": "../../tsconfig.json",
    "include": ["src"],
    "compilerOptions": {
      "outDir": "dist"
    }
  };
  
  await fs.writeFile(
    path.join(ICONS_DIR, 'tsconfig.json'),
    JSON.stringify(tsconfig, null, 2),
    'utf8'
  );
  
  console.log('✓ @ui3/icons package setup complete');
}

async function buildReactPackage() {
  console.log('Building @ui3/react package...');
  await ensureDir(REACT_DIR);
  await ensureDir(path.join(REACT_DIR, 'src'));
  await ensureDir(path.join(REACT_DIR, 'src/icons'));
  
  // Read manifest to get icon names
  const manifestPath = path.join(OPTIMIZED_DIR, 'manifest.json');
  const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  const iconNames = manifest.icons;
  
  // Create a React component for each icon
  for (const name of iconNames) {
    const componentName = toPascalCase(name);
    const svgContent = await fs.readFile(path.join(OPTIMIZED_DIR, `${name}.svg`), 'utf8');
    
    // Extract the SVG content without the outer <svg> tag
    const svgInnerContent = svgContent
      .replace(/<svg[^>]*>/, '')
      .replace('</svg>', '');
    
    const componentContent = `
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}

const ${componentName}: React.FC<IconProps> = ({
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
    ${svgInnerContent}
  </svg>
);

export default ${componentName};
`;
    
    await fs.writeFile(
      path.join(REACT_DIR, `src/icons/${name}.tsx`),
      componentContent,
      'utf8'
    );
  }
  
  // Create index.ts with exports
  const indexContent = `
export type { IconProps } from './types';
${generateImports(iconNames)}
`;
  
  await fs.writeFile(path.join(REACT_DIR, 'src/index.ts'), indexContent, 'utf8');
  
  // Create types.ts
  const typesContent = `
import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  title?: string;
}
`;
  
  await fs.writeFile(path.join(REACT_DIR, 'src/types.ts'), typesContent, 'utf8');
  
  // Create package.json
  const packageJson = {
    "name": "@ui3/react",
    "version": "0.1.0",
    "description": "React components for UI3 icons",
    "type": "module",
    "main": "./dist/index.js",
    "module": "./dist/index.js",
    "types": "./dist/index.d.ts",
    "author": "@planetabhi",
    "exports": {
      ".": {
        "import": "./dist/index.js",
        "types": "./dist/index.d.ts"
      }
    },
    "files": ["dist"],
    "scripts": {
      "build": "tsup"
    },
    "peerDependencies": {
      "react": "^18.0.0"
    },
    "devDependencies": {
      "@types/react": "^18.2.33",
      "react": "^18.2.0",
      "tsup": "^8.0.1",
      "typescript": "^5.2.2"
    },
    "publishConfig": {
      "access": "public"
    },
    "license": "MIT"
  };
  
  await fs.writeFile(
    path.join(REACT_DIR, 'package.json'),
    JSON.stringify(packageJson, null, 2),
    'utf8'
  );
  
  // Create tsup.config.ts
  const tsupConfig = `
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  treeshake: true,
  sourcemap: true,
  external: ['react']
});
`;
  
  await fs.writeFile(path.join(REACT_DIR, 'tsup.config.ts'), tsupConfig, 'utf8');
  
  // Create tsconfig.json
  const tsconfig = {
    "extends": "../../tsconfig.json",
    "include": ["src"],
    "compilerOptions": {
      "jsx": "react-jsx",
      "outDir": "dist"
    }
  };
  
  await fs.writeFile(
    path.join(REACT_DIR, 'tsconfig.json'),
    JSON.stringify(tsconfig, null, 2),
    'utf8'
  );
  
  console.log('✓ @ui3/react package setup complete');
}

async function buildVuePackage() {
  console.log('Building @ui3/vue package...');
  await ensureDir(VUE_DIR);
  await ensureDir(path.join(VUE_DIR, 'src'));
  await ensureDir(path.join(VUE_DIR, 'src/icons'));
  
  // Read manifest to get icon names
  const manifestPath = path.join(OPTIMIZED_DIR, 'manifest.json');
  const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  const iconNames = manifest.icons;
  
  // Create a Vue component for each icon
  for (const name of iconNames) {
    const componentName = toPascalCase(name);
    const svgContent = await fs.readFile(path.join(OPTIMIZED_DIR, `${name}.svg`), 'utf8');
    
    // Extract the SVG content without the outer <svg> tag
    const svgInnerContent = svgContent
      .replace(/<svg[^>]*>/, '')
      .replace('</svg>', '');
    
    const componentContent = `
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: '${componentName}',
  props: {
    size: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: 'currentColor'
    },
    title: {
      type: String,
      default: undefined
    }
  },
  setup(props) {
    return {
      ...props
    };
  }
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    :fill="color"
    :aria-hidden="title ? 'false' : 'true'"
  >
    <title v-if="title">{{ title }}</title>
    ${svgInnerContent}
  </svg>
</template>
`;
    
    await fs.writeFile(
      path.join(VUE_DIR, `src/icons/${name}.vue`),
      componentContent,
      'utf8'
    );
  }
  
  // Create index.ts with exports
  const indexContent = `
export type { IconProps } from './types';
${iconNames.map(name => `export { default as ${toPascalCase(name)} } from './icons/${name}.vue';`).join('\n')}
`;
  
  await fs.writeFile(path.join(VUE_DIR, 'src/index.ts'), indexContent, 'utf8');
  
  // Create types.ts
  const typesContent = `
export interface IconProps {
  size?: number | string;
  color?: string;
  title?: string;
}
`;
  
  await fs.writeFile(path.join(VUE_DIR, 'src/types.ts'), typesContent, 'utf8');
  
  // Create package.json
  const packageJson = {
    "name": "@ui3/vue",
    "version": "0.1.0",
    "description": "Vue components for UI3 icons",
    "type": "module",
    "main": "./dist/index.js",
    "module": "./dist/index.js",
    "types": "./dist/index.d.ts",
    "author": "@planetabhi",
    "exports": {
      ".": {
        "import": "./dist/index.js",
        "types": "./dist/index.d.ts"
      }
    },
    "files": ["dist"],
    "scripts": {
      "build": "vue-tsc && vite build"
    },
    "peerDependencies": {
      "vue": "^3.3.0"
    },
    "devDependencies": {
      "@vitejs/plugin-vue": "^5.0.4",
      "typescript": "^5.2.2",
      "vite": "^5.1.1",
      "vue": "^3.3.4",
      "vue-tsc": "^1.8.19"
    },
    "publishConfig": {
      "access": "public"
    },
    "license": "MIT"
  };
  
  await fs.writeFile(
    path.join(VUE_DIR, 'package.json'),
    JSON.stringify(packageJson, null, 2),
    'utf8'
  );
  
  // Create vite.config.ts
  const viteConfig = `
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UI3Vue',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
`;
  
  await fs.writeFile(path.join(VUE_DIR, 'vite.config.ts'), viteConfig, 'utf8');
  
  // Create tsconfig.json
  const tsconfig = {
    "extends": "../../tsconfig.json",
    "include": ["src"],
    "exclude": ["node_modules", "dist"],
    "compilerOptions": {
      "outDir": "dist",
      "declaration": true,
      "jsx": "preserve"
    }
  };
  
  await fs.writeFile(
    path.join(VUE_DIR, 'tsconfig.json'),
    JSON.stringify(tsconfig, null, 2),
    'utf8'
  );
  
  console.log('✓ @ui3/vue package setup complete');
}

async function build() {
  try {
    await buildIconsPackage();
    await buildReactPackage();
    await buildVuePackage();
    
    console.log('\nAll packages built successfully!');
  } catch (error) {
    console.error('Error building packages:', error);
    process.exit(1);
  }
}

build();