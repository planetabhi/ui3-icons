
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DockToSide',
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
    <path fill="#000" d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v6.172c0 2.227-2.693 3.342-4.268 1.767L10 10.707V14a.5.5 0 0 1-1 0V9.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 0 1h-3.293l4.732 4.732c.945.945 2.561.276 2.561-1.06V7.5A1.5 1.5 0 0 0 16.5 6h-9A1.5 1.5 0 0 0 6 7.5v9A1.5 1.5 0 0 0 7.5 18h5a.5.5 0 0 1 0 1h-5A2.5 2.5 0 0 1 5 16.5z"/>
  </svg>
</template>
