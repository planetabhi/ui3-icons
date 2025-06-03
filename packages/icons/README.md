# @ui3/icons

This package provides a collection of polished, cleaned up, and optimized SVG icons, sourced from the UI3 community file. These icons are designed to be versatile and easy to integrate into various projects.

## Installation

To install the package, run the following command in your project directory:

```bash
npm install @ui3/icons
```

## Usage

After installation, the SVG icons are available in the `node_modules/@ui3/icons/dist/` directory. You can use these icons in several ways:

1.  **Directly in HTML:** Copy the desired SVG files from the `dist/` directory into your project's public assets folder (e.g., `public/icons/`) and reference them in your HTML:

    ```html
    <img src="path/to/your/public/icons/absolute.svg" alt="Absolute Icon" width="24" height="24" />
    ```

2.  **Via JavaScript/Bundlers:** If you are using a build tool like Webpack or Vite, you can often import SVGs directly. The exact method may vary based on your project setup.

    ```javascript
    // Example: This might work in some frameworks or with specific bundler configurations
    import absoluteIconUrl from '@ui3/icons/dist/absolute.svg';

    // Then use 'absoluteIconUrl' in your templates, e.g.,
    // const myImage = document.createElement('img');
    // myImage.src = absoluteIconUrl;
    // document.body.appendChild(myImage);
    ```
    Refer to your bundler's documentation for the best way to handle static SVG assets.

## Browsing Icons

You can browse all available SVG icons in the [dist/](./dist/) directory of this package after installation. The `dist` directory contains all the individual SVG files.

## Naming Convention

Icons are named descriptively based on their visual representation or function (e.g., `add-horizontal.svg`, `arrow-left.svg`, `user-profile.svg`).

## Optimized SVGs

All icons in this package are optimized to ensure they are lightweight and performant, suitable for web and application development.

## Example Icons

Here are a few examples of the icons you can find in this package:

- `actions.svg`
- `add-circle.svg`
- `alert-error.svg`
- `bookmark.svg`
- `check-circle.svg`
- `chevron-down.svg`

## License

This package is MIT licensed.
