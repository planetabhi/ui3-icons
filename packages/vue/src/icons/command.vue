
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Command',
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
    <path fill="#000" fill-rule="evenodd" d="M4 7a3 3 0 0 1 6 0v2h4V7a3 3 0 1 1 3 3h-2v4h2a3 3 0 1 1-3 3v-2h-4v2a3 3 0 1 1-3-3h2v-4H7a3 3 0 0 1-3-3m5 2V7a2 2 0 1 0-2 2zm0 6H7a2 2 0 1 0 2 2zm1-1h4v-4h-4zm5 1v2a2 2 0 1 0 2-2zm0-6h2a2 2 0 1 0-2-2z" clip-rule="evenodd"/>
  </svg>
</template>
