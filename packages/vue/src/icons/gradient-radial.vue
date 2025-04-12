
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GradientRadial',
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
    <path fill="#000" fill-opacity=".3" fill-rule="evenodd" d="M17 17H7V7h10zm-5.02-9H12a4 4 0 0 1 .026 8H12a4 4 0 0 1-.02-8" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" clip-rule="evenodd"/>
  </svg>
</template>
