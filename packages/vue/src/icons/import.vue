
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Import',
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
    <path fill="#000" d="M8 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9.5a.5.5 0 0 0-1 0V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3a.5.5 0 0 0 0-1z"/><path fill="#000" d="M17 6a5.5 5.5 0 0 0-5.5 5.5v1.793l-1.646-1.647a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L12.5 13.293V11.5A4.5 4.5 0 0 1 17 7h.5a.5.5 0 0 0 0-1z"/>
  </svg>
</template>
