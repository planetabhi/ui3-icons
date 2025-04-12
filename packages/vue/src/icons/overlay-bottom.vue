
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OverlayBottom',
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
    <path fill="#000" fill-opacity=".3" d="M6 14h12v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"/><path fill="#000" fill-rule="evenodd" d="M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-1h8a1 1 0 0 1 1 1v8H7V6a1 1 0 0 1 1-1m9 10v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3z" clip-rule="evenodd"/>
  </svg>
</template>
