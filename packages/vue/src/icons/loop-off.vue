
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoopOff',
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
    <path fill="#000" d="M17.854 6.854a.5.5 0 0 0-.708-.708l-11 11a.5.5 0 0 0 .708.708zm-8.708-.708a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9H9a3 3 0 0 0-2.143 5.1.5.5 0 0 1-.714.7A4 4 0 0 1 9 8h1.293L9.146 6.854a.5.5 0 0 1 0-.708m8.004 3.047a.5.5 0 0 1 .707.008A4 4 0 0 1 15 16h-1.293l1.147 1.145a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L13.707 15H15a3 3 0 0 0 2.143-5.1.5.5 0 0 1 .007-.707"/>
  </svg>
</template>
