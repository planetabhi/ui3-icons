
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Description',
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
    <path fill="#000" d="M10.5 9a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-.5 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m.5 1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/><path fill="#000" fill-rule="evenodd" d="M9 18h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2m6-1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1" clip-rule="evenodd"/>
  </svg>
</template>
