
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Key',
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
    <path fill="#000" d="M15 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path fill="#000" fill-rule="evenodd" d="M13.5 14a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2.086a1 1 0 0 1 .293-.707l4.799-4.799a4.5 4.5 0 1 1 3.408 3.48zm-2.32-3.265-.109-.527a3.5 3.5 0 1 1 2.65 2.706l-1.221-.278V14h-2v2h-2v2H6v-2.086z" clip-rule="evenodd"/>
  </svg>
</template>
