
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Spread',
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
    <path fill="#000" d="M13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-2.464-4.536A1 1 0 1 0 16.95 7.05a1 1 0 0 0-1.414 1.414m0 8.486a1 1 0 1 1 1.414-1.415 1 1 0 0 1-1.414 1.414M12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2m1.05 3.95a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.413m0-8.484A1 1 0 1 1 8.466 7.05 1 1 0 0 1 7.05 8.465"/><path fill="#000" fill-rule="evenodd" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-1 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0" clip-rule="evenodd"/>
  </svg>
</template>
