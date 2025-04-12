
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SoundOff',
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
    <path fill="#000" d="M15 6v.879l-1 1v-1.88L11 9H7.5a.5.5 0 0 0-.5.5v5c0 .107.034.206.091.288l-.71.71A1.5 1.5 0 0 1 6 14.5v-5A1.5 1.5 0 0 1 7.5 8h3.085l2.708-2.707A1 1 0 0 1 15 6m-1 6.121 1-1V18a1 1 0 0 1-1.707.707L10.586 16h-.465l.94-.94L14 18zm3.854-5.267a.5.5 0 0 0-.708-.708l-11 11a.5.5 0 1 0 .708.707z"/>
  </svg>
</template>
