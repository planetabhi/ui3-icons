
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GradientAngular',
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
    <path fill="#000" fill-opacity=".3" fill-rule="evenodd" d="M7 17h10V7H7zm5-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8m.5-1.041a3 3 0 1 0-1 0V12a.5.5 0 0 1 1 0z" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M8 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm8 1H8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1" clip-rule="evenodd"/>
  </svg>
</template>
