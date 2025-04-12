
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SendToBack',
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
    <path fill="#000" fill-rule="evenodd" d="M11.854 17.854a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L11 16.293V9H7.5a1.5 1.5 0 1 1 0-3h8a1.5 1.5 0 0 1 0 3H12v7.293l1.146-1.147a.5.5 0 0 1 .708.708zM15.5 8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0 0 1z" clip-rule="evenodd"/><path fill="#000" d="M16 11.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2a1.5 1.5 0 0 0 0-3h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 1 .5.5M7.5 13h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 0 0-1h-2a1.5 1.5 0 0 0 0 3"/>
  </svg>
</template>
