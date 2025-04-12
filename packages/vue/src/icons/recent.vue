
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Recent',
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
    <path fill="#000" d="M12.5 8.5a.5.5 0 0 0-1 0V12a.5.5 0 0 0 .146.354l2 2a.5.5 0 0 0 .708-.708L12.5 11.793z"/><path fill="#000" fill-rule="evenodd" d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14m6-7a6 6 0 1 1-12 0 6 6 0 0 1 12 0" clip-rule="evenodd"/>
  </svg>
</template>
