
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Return',
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
    <path fill="#000" d="M10.354 5.646a.5.5 0 0 1 0 .708L7.707 9H11.5c3.576 0 6.5 2.924 6.5 6.5v2a.5.5 0 1 1-1 0v-2c0-3.024-2.476-5.5-5.5-5.5H7.707l2.647 2.646a.5.5 0 0 1-.708.707l-3.5-3.5a.5.5 0 0 1 0-.707l3.5-3.5a.5.5 0 0 1 .708 0"/>
  </svg>
</template>
