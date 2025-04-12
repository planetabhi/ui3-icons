
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlendFill',
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
    <path fill="#000" fill-opacity=".3" d="M16 13a4 4 0 1 1-8 0c0-2.17 2.093-5.388 3.251-7.001a.913.913 0 0 1 1.498 0c1.158 1.613 3.251 4.83 3.251 7"/><path fill="#000" fill-rule="evenodd" d="M12 17a4 4 0 0 0 4-4c0-2.17-2.093-5.388-3.251-7.001a.913.913 0 0 0-1.498 0C10.093 7.612 8 10.829 8 12.999a4 4 0 0 0 4 4m0-1a3 3 0 0 0 3-3c0-.827-.42-1.99-1.078-3.246C13.308 8.58 12.56 7.456 12 6.67c-.56.785-1.309 1.91-1.922 3.083C9.42 11.01 9 12.174 9 13a3 3 0 0 0 3 3" clip-rule="evenodd"/>
  </svg>
</template>
