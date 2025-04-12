
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BooleanIntersect',
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
    <path fill="#000" fill-opacity=".3" d="M14 10v4h-4v-4z"/><path fill="#000" fill-rule="evenodd" d="M5 15a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4h4a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-4zm5 0v4h9v-9h-4v4a1 1 0 0 1-1 1zm0-1v-4h4v4zm-1 0H5V5h9v4h-4a1 1 0 0 0-1 1z" clip-rule="evenodd"/>
  </svg>
</template>
