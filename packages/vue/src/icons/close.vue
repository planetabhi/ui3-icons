
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Close',
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
    <path fill="#000" d="M17.354 6.646a.5.5 0 0 1 0 .708L12.707 12l4.647 4.646a.5.5 0 0 1-.708.708L12 12.707l-4.646 4.647a.5.5 0 0 1-.708-.708L11.293 12 6.646 7.354a.5.5 0 0 1 .708-.707L12 11.293l4.646-4.647a.5.5 0 0 1 .708 0"/>
  </svg>
</template>
