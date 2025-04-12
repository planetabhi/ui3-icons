
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sun',
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
    <path fill="#000" d="M12 5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 12 5"/><path fill="#000" fill-rule="evenodd" d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-4 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6" clip-rule="evenodd"/><path fill="#000" d="M7.757 7.05a.5.5 0 1 0-.707.707l.707.707a.5.5 0 0 0 .707-.707zM19 12a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5m-2.05-4.243a.5.5 0 1 0-.707-.707l-.707.707a.5.5 0 0 0 .707.707zM12 17a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m4.242-1.464a.5.5 0 1 0-.707.707l.707.707a.5.5 0 1 0 .707-.707zM7 12a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5m1.465 4.243a.5.5 0 1 0-.707-.707l-.707.707a.5.5 0 0 0 .707.707z"/>
  </svg>
</template>
