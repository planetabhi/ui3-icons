
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ActualSize',
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
    <path fill="#000" d="M9.5 9.5a.5.5 0 0 0-.724-.447l-1 .5a.5.5 0 1 0 .448.894l.276-.138V14H8a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.5zm6 0a.5.5 0 0 0-.724-.447l-1 .5a.5.5 0 1 0 .448.894l.276-.138V14H14a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.5zm-3 1a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M12 13a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1"/><path fill="#000" fill-rule="evenodd" d="M5 7.5A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 16.5zM6.5 7h11a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5" clip-rule="evenodd"/>
  </svg>
</template>
