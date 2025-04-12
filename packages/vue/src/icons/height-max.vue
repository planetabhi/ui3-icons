
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeightMax',
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
    <path fill="#000" d="M6.5 5a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zm0 13a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zm4.646-10.854a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1-.708.708L12 8.707v6.586l1.646-1.647a.5.5 0 0 1 .708.708l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 0 1 .708-.708L11 15.293V8.707l-1.646 1.647a.5.5 0 0 1-.708-.708z"/>
  </svg>
</template>
