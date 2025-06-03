# @ui3/vue

This package provides Vue 3 components for the UI3 icon library, making it easy to integrate scalable vector icons into your Vue applications.

## Installation

To install the package, run the following command in your project directory:

```bash
npm install @ui3/vue
```

## Peer Dependencies

This package requires `vue` (version 3 or later) as a peer dependency. Ensure you have `vue` installed in your project:

```bash
npm install vue
# or
yarn add vue
```

## Usage

You can import each icon component individually. All icons are currently provided in a single default style and size. We recommend using Vue's `<script setup>` syntax for the most concise usage.

```vue
<template>
  <div>
    <AbsoluteIcon class="w-6 h-6 text-gray-500" aria-hidden="true" />
    <p>This is an example of using the AbsoluteIcon.</p>
  </div>
</template>

<script setup>
import { AbsoluteIcon } from '@ui3/vue';
// If we were to offer different styles/sizes in the future,
// imports might look like:
// import { AbsoluteIcon } from '@ui3/vue/24/solid';
// import { AnotherIcon } from '@ui3/vue/20/solid';
// However, currently, all icons are directly available from '@ui3/vue'.
</script>
```

### Applying Attributes

You can pass any standard HTML attributes (like `class`, `aria-label`, `onClick`, etc.) directly to the icon components. These attributes will be forwarded to the underlying SVG element.

```vue
<template>
  <AbsoluteIcon class="custom-vue-class" aria-label="Absolute Value Identifier" />
</template>

<script setup>
import { AbsoluteIcon } from '@ui3/vue';
</script>
```

## Naming Convention

Icon components are named in **UpperCamelCase**, directly corresponding to their original SVG file names, and suffixed with `Icon`.

For example:
- `absolute.svg` becomes `AbsoluteIcon`
- `add-horizontal.svg` becomes `AddHorizontalIcon`
- `user-profile.svg` becomes `UserProfileIcon`

## Available Icons

This package provides Vue components for all icons available in the `@ui3/icons` package. Refer to the [`@ui3/icons` README](../icons/README.md) for a conceptual list of available icon names (the SVG file names).

## License

This package is MIT licensed.
