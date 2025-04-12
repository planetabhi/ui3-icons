
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GradientLinear',
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
    <path fill="#000" fill-opacity=".3" d="M8 7h3.5v10H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"/><path fill="#000" fill-rule="evenodd" d="M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm6.5-1H16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3.5zm-1 0H8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.5z" clip-rule="evenodd"/>
  </svg>
</template>
