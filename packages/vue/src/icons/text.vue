
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Text',
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
    <path fill="#000" d="M4 4.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V5h-6.5v14H15a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1h2.5V5H5v2.5a.5.5 0 0 1-1 0z"/>
  </svg>
</template>
