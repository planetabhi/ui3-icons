
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EditText',
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
    <path fill="#000" d="M8.5 6a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-.5-.5"/><path fill="#000" fill-rule="evenodd" d="M13.96 8.303a.5.5 0 0 0-.92 0l-3 7a.5.5 0 0 0 .92.394L11.687 14h3.626l.727 1.697a.5.5 0 0 0 .92-.394zm-.46 1.466L14.885 13h-2.77z" clip-rule="evenodd"/>
  </svg>
</template>
