
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LinkConnected',
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
    <path fill="#000" d="M10 8a2 2 0 1 1 4 0v1.5a.5.5 0 0 0 1 0V8a3 3 0 1 0-6 0v1.5a.5.5 0 0 0 1 0zm0 8a2 2 0 1 0 4 0v-1.5a.5.5 0 0 1 1 0V16a3 3 0 1 1-6 0v-1.5a.5.5 0 0 1 1 0z"/><path fill="#000" d="M12.5 10a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0z"/>
  </svg>
</template>
