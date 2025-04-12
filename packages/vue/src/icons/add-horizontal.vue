
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddHorizontal',
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
    <path fill="#000" fill-rule="evenodd" d="M7.5 6A1.5 1.5 0 0 0 6 7.5v9A1.5 1.5 0 0 0 7.5 18h2a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 9.5 6zm2 1h-2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5m5-1A1.5 1.5 0 0 0 13 7.5v2a1.5 1.5 0 0 0 1.5 1.5h2A1.5 1.5 0 0 0 18 9.5v-2A1.5 1.5 0 0 0 16.5 6zm2 1h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5" clip-rule="evenodd"/><path fill="#000" d="M16 13.5a.5.5 0 0 0-1 0V15h-1.5a.5.5 0 0 0 0 1H15v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16z"/>
  </svg>
</template>
