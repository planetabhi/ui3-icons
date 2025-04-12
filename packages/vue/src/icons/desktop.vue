
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Desktop',
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
    <path fill="#000" fill-rule="evenodd" d="M5 7.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H14v1h.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h.5v-1H5.5a.5.5 0 0 1-.5-.5zM6 15V8h12v7zm5 1v1h2v-1z" clip-rule="evenodd"/>
  </svg>
</template>
