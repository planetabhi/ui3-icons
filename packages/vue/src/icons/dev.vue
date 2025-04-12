
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Dev',
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
    <path fill="#000" d="M14.447 8.224a.5.5 0 1 0-.894-.447l-4 8a.5.5 0 1 0 .894.447zm1.723 8.152a.5.5 0 0 0 .706-.047l3.5-4a.5.5 0 0 0 0-.658l-3.5-4a.5.5 0 0 0-.752.658L19.336 12l-3.212 3.67a.5.5 0 0 0 .047.706M7.83 7.624a.5.5 0 0 0-.706.047l-3.5 4a.5.5 0 0 0 0 .658l3.5 4a.5.5 0 1 0 .752-.658L4.664 12l3.212-3.672a.5.5 0 0 0-.047-.705"/>
  </svg>
</template>
