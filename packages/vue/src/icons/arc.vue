
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Arc',
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
    <path fill="#000" d="M7 12a5 5 0 0 1 5-5 .5.5 0 0 0 0-1 6 6 0 1 0 6 6 .5.5 0 0 0-1 0 5 5 0 0 1-10 0"/><path fill="#000" d="M9.5 12A2.5 2.5 0 0 1 12 9.5a.5.5 0 0 0 0-1 3.5 3.5 0 1 0 3.5 3.5.5.5 0 0 0-1 0 2.5 2.5 0 0 1-5 0"/>
  </svg>
</template>
