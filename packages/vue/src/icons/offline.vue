
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Offline',
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
    <path fill="#000" d="M10.354 10.146a.5.5 0 0 0-.708.708l1.647 1.646-1.647 1.646a.5.5 0 0 0 .708.708L12 13.207l1.646 1.647a.5.5 0 0 0 .708-.708L12.707 12.5l1.647-1.646a.5.5 0 0 0-.708-.708L12 11.793z"/><path fill="#000" fill-rule="evenodd" d="M3 13a5 5 0 0 0 4.5 4.975V18H17a4 4 0 0 0 .987-7.877A5.5 5.5 0 0 0 7.591 8.016 5 5 0 0 0 3 13m4.798 4-.2-.02a4 4 0 0 1 .074-7.967l.558-.045.253-.5a4.5 4.5 0 0 1 8.506 1.722l.05.724.702.178A3.002 3.002 0 0 1 17 17z" clip-rule="evenodd"/>
  </svg>
</template>
