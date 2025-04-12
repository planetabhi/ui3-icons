
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WidthMax',
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
    <path fill="#000" d="M19 6.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0zm-13 0a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0zm10.854 4.646a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L15.293 12H8.707l1.647 1.646a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .708.708L8.707 11h6.586l-1.647-1.646a.5.5 0 0 1 .708-.708z"/>
  </svg>
</template>
