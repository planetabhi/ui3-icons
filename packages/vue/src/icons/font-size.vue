
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FontSize',
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
    <path fill="#000" fill-rule="evenodd" d="M5.757 16h1.015l.805-2.266h3.235L11.616 16h1.016L9.694 8h-1zm4.75-3.125-1.282-3.61h-.062l-1.281 3.61zM13.63 16h.985l.421-1.255h1.914L17.372 16h.984l-1.795-5.09h-1.138zm3.071-1.996-.689-2.05h-.04l-.688 2.05z" clip-rule="evenodd"/>
  </svg>
</template>
