
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LineHeight',
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
    <path fill="#000" d="M5 5.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 13a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"/><path fill="#000" fill-rule="evenodd" d="M8.564 16H9.58l.804-2.266h3.236L14.424 16h1.016l-2.938-8h-1zm4.75-3.125-1.28-3.61h-.063l-1.282 3.61z" clip-rule="evenodd"/>
  </svg>
</template>
