
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Duplicate',
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
    <path fill="#000" d="M14 12a.5.5 0 0 0-1 0v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1z"/><path fill="#000" fill-rule="evenodd" d="M16.5 9H15V7.5A1.5 1.5 0 0 0 13.5 6h-6A1.5 1.5 0 0 0 6 7.5v6A1.5 1.5 0 0 0 7.5 15H9v1.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 16.5 9m-9-2h6a.5.5 0 0 1 .5.5V9h-3.5A1.5 1.5 0 0 0 9 10.5V14H7.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5m3 3a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"/>
  </svg>
</template>
