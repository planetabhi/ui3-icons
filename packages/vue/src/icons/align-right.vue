
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AlignRight',
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
    <path fill="#000" d="M19 7.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 .5-.5m0 4a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5m-.5 3.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1z"/>
  </svg>
</template>
