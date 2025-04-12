
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListHorizontal',
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
    <path fill="#000" d="M6.75 18a.75.75 0 0 1-.75-.75V5.75A.75.75 0 0 1 6.75 5h.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75zm5 0a.75.75 0 0 1-.75-.75V5.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75zm4.25-.75c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75V5.75a.75.75 0 0 0-.75-.75h-.5a.75.75 0 0 0-.75.75z"/>
  </svg>
</template>
