
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Variable',
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
    <path fill="#000" d="M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/><path fill="#000" fill-rule="evenodd" d="M10.992 5.588a2 2 0 0 1 2.016 0l4 2.333A2 2 0 0 1 18 9.65v4.702a2 2 0 0 1-.992 1.728l-4 2.333a2 2 0 0 1-2.016 0l-4-2.333A2 2 0 0 1 6 14.35v-4.7a2 2 0 0 1 .992-1.728zm1.512.864 4 2.333a1 1 0 0 1 .496.864v4.702a1 1 0 0 1-.496.864l-4 2.333a1 1 0 0 1-1.008 0l-4-2.333A1 1 0 0 1 7 14.351V9.65a1 1 0 0 1 .496-.864l4-2.333a1 1 0 0 1 1.008 0" clip-rule="evenodd"/>
  </svg>
</template>
