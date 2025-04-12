
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CollapseLayers',
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
    <path fill="#000" d="M6.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM6 13.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm6.646.146 2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L15.5 15.207l-1.646 1.647a.5.5 0 0 1-.708-.708m2.708-6.292a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L15.5 8.793l1.646-1.647a.5.5 0 0 1 .708.708z"/>
  </svg>
</template>
