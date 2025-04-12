
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Clipboard',
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
    <path fill="#000" d="M10 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"/><path fill="#000" fill-rule="evenodd" d="M9 6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2m1 0h4v1h-4zM9 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1 1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1" clip-rule="evenodd"/>
  </svg>
</template>
