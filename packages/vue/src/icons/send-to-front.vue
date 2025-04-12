
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SendToFront',
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
    <path fill="#000" fill-rule="evenodd" d="M11.146 6.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L12 7.707V15h3.5a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 0 1 0-3H11V7.707L9.854 8.854a.5.5 0 1 1-.708-.708zM7.5 16a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1z" clip-rule="evenodd"/><path fill="#000" d="M7 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 0 0-1h-2a1.5 1.5 0 0 0 0 3h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 1-.5-.5m8.5-1.5h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 0 0 1h2a1.5 1.5 0 0 0 0-3"/>
  </svg>
</template>
