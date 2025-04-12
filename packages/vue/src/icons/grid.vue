
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Grid',
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
    <path fill="#000" fill-rule="evenodd" d="M8 6.5a.5.5 0 0 0-1 0V7h-.5a.5.5 0 0 0 0 1H7v3.5h-.5a.5.5 0 0 0 0 1H7V16h-.5a.5.5 0 0 0 0 1H7v.5a.5.5 0 0 0 1 0V17h3.5v.5a.5.5 0 0 0 1 0V17H16v.5a.5.5 0 0 0 1 0V17h.5a.5.5 0 0 0 0-1H17v-3.5h.5a.5.5 0 0 0 0-1H17V8h.5a.5.5 0 0 0 0-1H17v-.5a.5.5 0 0 0-1 0V7h-3.5v-.5a.5.5 0 0 0-1 0V7H8zm8 9.5v-3.5h-3.5V16zm-4.5 0v-3.5H8V16zM8 11.5V8h3.5v3.5zm4.5 0V8H16v3.5z" clip-rule="evenodd"/>
  </svg>
</template>
