# @ui3/react

This package provides React components for the UI3 icon library, making it easy to integrate scalable vector icons into your React applications.

## Installation

To install the package, run the following command in your project directory:

```bash
npm install @ui3/react
```

## Peer Dependencies

This package requires `react` as a peer dependency. Ensure you have `react` installed in your project:

```bash
npm install react
# or
yarn add react
```

## Usage

You can import each icon component individually. All icons are currently provided in a single default style and size.

```jsx
import React from 'react';
import { AbsoluteIcon } from '@ui3/react';
// If we were to offer different styles/sizes in the future,
// imports might look like:
// import { AbsoluteIcon } from '@ui3/react/24/solid';
// import { AnotherIcon } from '@ui3/react/20/solid';
// However, currently, all icons are directly available from '@ui3/react'.

function MyAwesomeComponent() {
  return (
    <div>
      <AbsoluteIcon className="w-6 h-6 text-gray-500" aria-hidden="true" />
      <p>This is an example of using the AbsoluteIcon.</p>
    </div>
  );
}

export default MyAwesomeComponent;
```

### Applying Props

You can pass any standard HTML attributes (like `className`, `aria-label`, `onClick`, etc.) directly to the icon components. These props will be forwarded to the underlying SVG element.

```jsx
<AbsoluteIcon className="custom-class" aria-label="Absolute Value" />
```

## Naming Convention

Icon components are named in **UpperCamelCase**, directly corresponding to their original SVG file names, and suffixed with `Icon`.

For example:
- `absolute.svg` becomes `AbsoluteIcon`
- `add-horizontal.svg` becomes `AddHorizontalIcon`
- `user-profile.svg` becomes `UserProfileIcon`

## Available Icons

This package provides React components for all icons available in the `@ui3/icons` package. Refer to the [`@ui3/icons` README](../icons/README.md) for a conceptual list of available icon names (the SVG file names).

## License

This package is MIT licensed.
