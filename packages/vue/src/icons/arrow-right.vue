
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ArrowRight',
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
    <path fill="#000" d="M13.146 7.146a.5.5 0 0 1 .707 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.707-.708L16.293 12H6.5a.5.5 0 0 1 0-1h9.793l-3.147-3.146a.5.5 0 0 1 0-.708"/>
  </svg>
</template>
