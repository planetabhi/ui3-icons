
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Insert',
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
    <path fill="#000" d="M12.5 8.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/><path fill="#000" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-1 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0" clip-rule="evenodd"/>
  </svg>
</template>
