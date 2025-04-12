
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Folder',
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
    <path fill="#000" fill-rule="evenodd" d="M6 7a1 1 0 0 1 1-1h3.882a1 1 0 0 1 .894.553L12.5 8h4A1.5 1.5 0 0 1 18 9.5v6a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 15.5zm1 0h3.882l.5 1H7zm0 2v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"/>
  </svg>
</template>
