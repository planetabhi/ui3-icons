
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Backward',
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
    <path fill="#000" fill-rule="evenodd" d="M15.293 7.293A1 1 0 0 1 17 8v8a1 1 0 0 1-1.707.707L12 13.414V16a1 1 0 0 1-1.707.707l-4-4a1 1 0 0 1 0-1.414l4-4A1 1 0 0 1 12 8v2.586zM12 12l4-4v8zm-1 4V8l-4 4z" clip-rule="evenodd"/>
  </svg>
</template>
