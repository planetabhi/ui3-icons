
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Rename',
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
    <path fill="#000" d="M11.5 5a.5.5 0 0 0 0 1H13v12h-1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H14V6h1.5a.5.5 0 0 0 0-1z"/><path fill="#000" d="M6.5 9a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 1 0 1h-5A1.5 1.5 0 0 1 5 14.5v-5A1.5 1.5 0 0 1 6.5 8h5a.5.5 0 0 1 0 1zm11 0a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 17.5 8h-2a.5.5 0 0 0 0 1z"/>
  </svg>
</template>
