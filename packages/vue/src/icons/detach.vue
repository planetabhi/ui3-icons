
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Detach',
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
    <path fill="#000" d="M17.354 6.647a2.62 2.62 0 0 1 0 3.707l-1.5 1.5a.5.5 0 1 1-.707-.707l1.5-1.5a1.621 1.621 0 0 0-2.293-2.293l-1.5 1.5a.5.5 0 1 1-.707-.707l1.5-1.5a2.62 2.62 0 0 1 3.707 0M6.647 17.354a2.62 2.62 0 0 1 0-3.707l1.5-1.5a.5.5 0 1 1 .707.707l-1.5 1.5a1.621 1.621 0 0 0 2.293 2.293l1.5-1.5a.5.5 0 0 1 .707.707l-1.5 1.5a2.62 2.62 0 0 1-3.707 0M9.5 6a.5.5 0 0 1 .5.5V8a.5.5 0 1 1-1 0V6.5a.5.5 0 0 1 .5-.5m-3 3a.5.5 0 1 0 0 1H8a.5.5 0 1 0 0-1zm8 9a.5.5 0 0 1-.5-.5V16a.5.5 0 0 1 1 0v1.5a.5.5 0 0 1-.5.5m3-3a.5.5 0 1 0 0-1H16a.5.5 0 0 0 0 1z"/>
  </svg>
</template>
