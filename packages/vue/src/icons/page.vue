
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Page',
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
    <path fill="#000" fill-rule="evenodd" d="M8 20h8a2 2 0 0 0 2-2V9.414a1 1 0 0 0-.293-.707l-4.414-4.414A1 1 0 0 0 12.586 4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2m9-2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4v3.5a1.5 1.5 0 0 0 1.5 1.5H17zm-.414-9L13 5.414V8.5a.5.5 0 0 0 .5.5z" clip-rule="evenodd"/>
  </svg>
</template>
