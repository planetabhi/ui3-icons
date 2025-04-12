
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UnderlineWave',
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
    <path fill="#000" d="M11.94 16.854a1.5 1.5 0 0 1 2.12 0l.586.586a.5.5 0 0 0 .707 0l.587-.586a1.5 1.5 0 0 1 .569-.357c.26-.09.491.141.491.418v.106c0 .217-.2.387-.354.54l-.585.586a1.5 1.5 0 0 1-2.121 0l-.586-.586a.5.5 0 0 0-.707 0l-.587.586a1.5 1.5 0 0 1-2.12 0l-.586-.586a.5.5 0 0 0-.708 0l-.585.586a1.5 1.5 0 0 1-.57.356c-.26.09-.49-.14-.491-.417v-.107c0-.217.2-.386.354-.54l.585-.585a1.5 1.5 0 0 1 2.121 0l.586.586a.5.5 0 0 0 .707 0zM15.5 6a.5.5 0 0 1 .5.5V11a4 4 0 0 1-8 0V6.5a.5.5 0 0 1 1 0V11a3 3 0 0 0 6 0V6.5a.5.5 0 0 1 .5-.5"/>
  </svg>
</template>
