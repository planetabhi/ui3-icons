
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AlignTop',
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
    <path fill="#000" d="M5.5 5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zm6.354 2.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 .708.708L11 8.707V16.5a.5.5 0 0 0 1 0V8.707l2.146 2.147a.5.5 0 0 0 .708-.708z"/>
  </svg>
</template>
