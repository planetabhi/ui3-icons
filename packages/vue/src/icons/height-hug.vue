
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeightHug',
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
    <path fill="#000" d="M14.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.707 0l-3-3a.5.5 0 0 1 .707-.708L11.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0m0 9.708a.5.5 0 0 1-.708 0L11.5 14.207l-2.646 2.647a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708"/>
  </svg>
</template>
