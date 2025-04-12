
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AlignBottomGroup',
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
    <path fill="#000" fill-opacity=".3" fill-rule="evenodd" d="M5 6.25C5 5.56 5.56 5 6.25 5h10.5c.69 0 1.25.56 1.25 1.25v8.25a.5.5 0 0 1-1 0V6.25a.25.25 0 0 0-.25-.25H6.25a.25.25 0 0 0-.25.25v8.25a.5.5 0 0 1-1 0z" clip-rule="evenodd"/><path fill="#000" d="M9.25 7a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-6.5A.75.75 0 0 1 8.75 7zm5 4a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 .75-.75zM18 17.5a.5.5 0 0 0-.5-.5h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 .5-.5"/>
  </svg>
</template>
