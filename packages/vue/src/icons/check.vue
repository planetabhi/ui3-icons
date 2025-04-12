
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Check',
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
    <path fill="#000" d="M15.252 8.568a.5.5 0 0 1 .18.684l-3.5 6a.5.5 0 0 1-.816.068l-2.5-3a.5.5 0 0 1 .768-.64l2.043 2.452 3.141-5.384a.5.5 0 0 1 .684-.18"/>
  </svg>
</template>
