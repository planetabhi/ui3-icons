
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SendBackward',
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
    <path fill="#000" fill-rule="evenodd" d="M17 16.5a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1 0-3h8a1.5 1.5 0 0 1 1.5 1.5m-1.5.5a.5.5 0 0 0 0-1h-8a.5.5 0 0 0 0 1zm-3.646-3.146a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L11 12.293V9H7.5a1.5 1.5 0 1 1 0-3h8a1.5 1.5 0 0 1 0 3H12v3.293l1.146-1.147a.5.5 0 0 1 .708.708zM16 7.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 .5.5" clip-rule="evenodd"/>
  </svg>
</template>
