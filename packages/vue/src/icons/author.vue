
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Author',
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
    <path fill="#000" fill-rule="evenodd" d="M7 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4" clip-rule="evenodd"/><path fill="#000" d="M5.402 15.49a.5.5 0 0 0 .587-.387l.002-.008.015-.053q.022-.077.088-.221c.089-.19.245-.453.51-.717C7.122 13.584 8.114 13 10 13c.513 0 .96.043 1.348.117l.827-.828C11.577 12.11 10.86 12 10 12c-2.114 0-3.372.665-4.103 1.396-.36.36-.58.724-.71 1.002a3 3 0 0 0-.173.485l-.003.011v.006c-.001 0-.001.002.49.1l-.491-.098a.5.5 0 0 0 .392.588"/><path fill="#000" fill-rule="evenodd" d="M13 19a1 1 0 0 0 .707-.293l5-5a1 1 0 0 0 0-1.414l-1.5-1.5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0-.293.707V18a1 1 0 0 0 1 1zm0-1 5-5-1.5-1.5-5 5V18z" clip-rule="evenodd"/>
  </svg>
</template>
