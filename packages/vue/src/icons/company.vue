
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Company',
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
    <path fill="#000" fill-rule="evenodd" d="M7 18a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4h2V8.5a.5.5 0 0 1 1 0V10h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zM7 6h5v11h-1v-2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H7zm6 5v6h5v-6zm-4 6h1v-2H9z" clip-rule="evenodd"/>
  </svg>
</template>
