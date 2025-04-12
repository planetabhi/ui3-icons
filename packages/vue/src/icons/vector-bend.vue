
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VectorBend',
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
    <path fill="#000" fill-rule="evenodd" d="M17.5 9a2.5 2.5 0 1 0-2.45-3H14a8 8 0 0 0-8 8v1.05a2.5 2.5 0 1 0 1 0V14a7 7 0 0 1 7-7h1.05a2.5 2.5 0 0 0 2.45 2m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-11 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"/>
  </svg>
</template>
