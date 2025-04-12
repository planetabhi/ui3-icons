
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'History',
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
    <path fill="#000" d="M8 9a5 5 0 1 1-.975 3.499.54.54 0 0 0-.525-.5.47.47 0 0 0-.48.5A6 6 0 1 0 7 8.683V6.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1z"/><path fill="#000" d="M12 9a.5.5 0 0 1 .5.5v2.293l1.354 1.353a.5.5 0 0 1-.707.707l-1.5-1.5A.5.5 0 0 1 11.5 12V9.5A.5.5 0 0 1 12 9"/>
  </svg>
</template>
