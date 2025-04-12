
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Ellipse',
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
    <path fill="#000" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m0-1a8 8 0 1 0 0-16 8 8 0 0 0 0 16" clip-rule="evenodd"/>
  </svg>
</template>
