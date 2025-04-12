
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FlipHorizontal',
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
    <path fill="#000" d="M12.5 6.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0z"/><path fill="#000" fill-rule="evenodd" d="M6 9.104a.75.75 0 0 1 1.28-.53L10 11.292a1 1 0 0 1 0 1.414l-2.72 2.72a.75.75 0 0 1-1.28-.53zm1 .603v4.586L9.293 12zm11-.603a.75.75 0 0 0-1.28-.53L14 11.292a1 1 0 0 0 0 1.414l2.72 2.72a.75.75 0 0 0 1.28-.53zm-1 .603v4.586L14.707 12z" clip-rule="evenodd"/>
  </svg>
</template>
