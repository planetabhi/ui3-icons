
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Filter',
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
    <path fill="#000" d="M9.5 12a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm.5 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M8.5 9a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1z"/><path fill="#000" fill-rule="evenodd" d="M4.1 12a7.9 7.9 0 1 1 15.8 0 7.9 7.9 0 0 1-15.8 0m7.9 6.9a6.9 6.9 0 1 1 0-13.8 6.9 6.9 0 0 1 0 13.8" clip-rule="evenodd"/>
  </svg>
</template>
