
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FlipVertical',
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
    <path fill="#000" d="M17.5 12.5a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1z"/><path fill="#000" fill-rule="evenodd" d="M14.896 18a.75.75 0 0 0 .53-1.28L12.708 14a1 1 0 0 0-1.414 0l-2.72 2.72a.75.75 0 0 0 .53 1.28zm-.603-1H9.707L12 14.707zm.603-11a.75.75 0 0 1 .53 1.28L12.708 10a1 1 0 0 1-1.414 0l-2.72-2.72A.75.75 0 0 1 9.103 6zm-.603 1H9.707L12 9.293z" clip-rule="evenodd"/>
  </svg>
</template>
