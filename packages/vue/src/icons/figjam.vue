
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Figjam',
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
    <path fill="#000" fill-rule="evenodd" d="M4.008 5.124a1 1 0 0 1 1.116-1.116l4 .5a1 1 0 0 1 .583.285l9.793 9.793a2 2 0 0 1 0 2.828L17.414 19.5a2 2 0 0 1-2.828 0L4.793 9.707a1 1 0 0 1-.285-.583zm12.7 13.669 2.085-2.086a1 1 0 0 0 0-1.414l-8.44-8.44-3.5 3.5 8.44 8.44a1 1 0 0 0 1.414 0M6.145 9.646l3.5-3.5L9 5.5 5 5l.5 4z" clip-rule="evenodd"/>
  </svg>
</template>
