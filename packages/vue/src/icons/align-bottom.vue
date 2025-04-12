
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AlignBottom',
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
    <path fill="#000" d="m14.854 13.854-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L11 15.293V7.5a.5.5 0 0 1 1 0v7.793l2.146-2.147a.5.5 0 0 1 .708.708M5.5 19a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1z"/>
  </svg>
</template>
