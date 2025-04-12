
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Resize',
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
    <path fill="#000" d="M14.146 8.146a.5.5 0 0 1 .707 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.707-.708L16.293 12H7.707l2.146 2.147a.5.5 0 1 1-.707.707l-3-3a.5.5 0 0 1 0-.707l3-3a.5.5 0 0 1 .707.707L7.707 11h8.586l-2.147-2.146a.5.5 0 0 1 0-.708"/>
  </svg>
</template>
