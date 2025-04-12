
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NewBranch',
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
    <path fill="#000" d="M8.146 6.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L9 7.707V17a6 6 0 0 0 6-6V7.707l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L16 7.707V11a7 7 0 0 1-7 7h-.5a.5.5 0 0 1-.5-.5V7.707L6.854 8.854a.5.5 0 1 1-.708-.708z"/>
  </svg>
</template>
