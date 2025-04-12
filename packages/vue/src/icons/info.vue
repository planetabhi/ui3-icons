
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Info',
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
    <path fill="#000" d="M12.75 9.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.25 2.25a.5.5 0 0 0-1 0V15a.5.5 0 0 0 1 0z"/><path fill="#000" fill-rule="evenodd" d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-1a6 6 0 1 0 0-12 6 6 0 0 0 0 12" clip-rule="evenodd"/>
  </svg>
</template>
