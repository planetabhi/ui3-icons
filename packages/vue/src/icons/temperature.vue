
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Temperature',
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
    <path fill="#000" fill-opacity=".3" d="M13 11h-2v3.208a2.5 2.5 0 1 0 2 0z"/><path fill="#000" fill-rule="evenodd" d="M10 6a2 2 0 1 1 4 0v7.627a3.5 3.5 0 1 1-4 0zm2-1a1 1 0 0 0-1 1v4h2V6a1 1 0 0 0-1-1m-1 6h2v3.19l.25.144A2.499 2.499 0 0 1 12 19a2.5 2.5 0 0 1-1.25-4.666l.25-.144z" clip-rule="evenodd"/><path fill="#000" d="M16.5 6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM16 9.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
  </svg>
</template>
