
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OverlaySwap',
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
    <path fill="#000" d="M6 6.5a.5.5 0 0 1 .5-.5H9a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-1 0V8a1 1 0 0 0-1-1H6.5a.5.5 0 0 1-.5-.5m4.5 7.5a.5.5 0 0 1 .5.5V16a2 2 0 0 1-2 2H6.5a.5.5 0 0 1 0-1H9a1 1 0 0 0 1-1v-1.5a.5.5 0 0 1 .5-.5M18 6.5a.5.5 0 0 0-.5-.5H15a2 2 0 0 0-2 2v1.5a.5.5 0 1 0 1 0V8a1 1 0 0 1 1-1h2.5a.5.5 0 0 0 .5-.5M13.5 14a.5.5 0 0 0-.5.5V16a2 2 0 0 0 2 2h2.5a.5.5 0 0 0 0-1H15a1 1 0 0 1-1-1v-1.5a.5.5 0 0 0-.5-.5"/><path fill="#000" d="M8.354 10.854a.5.5 0 0 0-.707-.708l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .707-.708l-.647-.646h8.586l-.646.646a.5.5 0 0 0 .707.708l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 0 0-.707.708l.646.646H7.707z"/>
  </svg>
</template>
