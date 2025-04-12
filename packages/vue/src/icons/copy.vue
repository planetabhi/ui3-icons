
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Copy',
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
    <path fill="#000" fill-rule="evenodd" d="M7.5 6A1.5 1.5 0 0 0 6 7.5v6A1.5 1.5 0 0 0 7.5 15H9v1.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 16.5 9H15V7.5A1.5 1.5 0 0 0 13.5 6zm7.5 4v3.5a1.5 1.5 0 0 1-1.5 1.5H10v1.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5zM7 7.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"/>
  </svg>
</template>
