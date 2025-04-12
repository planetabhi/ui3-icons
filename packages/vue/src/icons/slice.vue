
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Slice',
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
    <path fill="#000" fill-rule="evenodd" d="m11.994 16.71 8.138-8.353a2.28 2.28 0 0 0-3.244-3.202l-5.739 5.739-8.497 8.247A.5.5 0 0 0 3 20h5.5a3.5 3.5 0 0 0 3.494-3.29m7.41-10.848c-.499-.5-1.309-.5-1.809 0L12 11.457v3.813l7.416-7.611a1.28 1.28 0 0 0-.011-1.797M11 12.432 4.233 19H8.5a2.5 2.5 0 0 0 2.5-2.5z" clip-rule="evenodd"/>
  </svg>
</template>
