
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WidthFill',
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
    <path fill="#000" d="M9.354 8.146a.5.5 0 0 1 0 .708L7.207 11h9.586l-2.146-2.146a.5.5 0 0 1 .707-.708l3 3a.5.5 0 0 1 0 .707l-3 3a.5.5 0 0 1-.708-.707L16.793 12H7.207l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0"/>
  </svg>
</template>
