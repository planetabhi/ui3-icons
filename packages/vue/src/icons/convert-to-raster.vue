
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ConvertToRaster',
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
    <path fill="#000" d="M11 5.5a.5.5 0 0 1 1 0v12a.5.5 0 0 1-1 0zm-1 11.68c0 .33-.309.574-.62.466a6.503 6.503 0 0 1 0-12.292c.311-.108.62.136.62.466a.545.545 0 0 1-.368.506 5.502 5.502 0 0 0 0 10.349.545.545 0 0 1 .368.505M13 6.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V8h1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H16v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H15v-1.5a.5.5 0 0 1 .5-.5H17V9h-1.5a.5.5 0 0 1-.5-.5V7h-1.5a.5.5 0 0 1-.5-.5"/>
  </svg>
</template>
