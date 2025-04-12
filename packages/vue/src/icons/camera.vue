
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Camera',
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
    <path fill="#000" fill-rule="evenodd" d="M16 13.914v.586a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 5 14.5v-5A2.5 2.5 0 0 1 7.5 7h6A2.5 2.5 0 0 1 16 9.5v.586l1.293-1.293A1 1 0 0 1 19 9.5v5a1 1 0 0 1-1.707.707zM7.5 8h6A1.5 1.5 0 0 1 15 9.5v5a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 6 14.5v-5A1.5 1.5 0 0 1 7.5 8m8.5 4.5 2 2v-5l-2 2z" clip-rule="evenodd"/>
  </svg>
</template>
