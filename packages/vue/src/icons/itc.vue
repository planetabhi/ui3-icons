
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Itc',
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
    <path fill="#000" d="M10 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-2.083L11.6 17h1.9a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2.083L12.4 7h-1.9a.5.5 0 0 1-.5-.5"/>
  </svg>
</template>
