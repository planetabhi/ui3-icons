
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Resolve',
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
    <path fill="#000" d="M15.432 9.252a.5.5 0 1 0-.864-.504l-3.14 5.384-2.044-2.452a.5.5 0 0 0-.768.64l2.5 3a.5.5 0 0 0 .816-.068z"/><path fill="#000" fill-rule="evenodd" d="M19.9 12a7.9 7.9 0 1 1-15.8 0 7.9 7.9 0 0 1 15.8 0m-1 0a6.9 6.9 0 1 1-13.8 0 6.9 6.9 0 0 1 13.8 0" clip-rule="evenodd"/>
  </svg>
</template>
