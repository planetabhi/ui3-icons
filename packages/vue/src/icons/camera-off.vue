
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CameraOff',
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
    <path fill="#000" d="M17.854 6.854a.5.5 0 0 0-.708-.708l-11 11a.5.5 0 0 0 .708.708zM13.5 7c.401 0 .78.094 1.116.262l-.776.777A1.5 1.5 0 0 0 13.5 8h-6A1.5 1.5 0 0 0 6 9.5v5c0 .383.144.733.38.998l-.707.708A2.5 2.5 0 0 1 5 14.5v-5A2.5 2.5 0 0 1 7.5 7z"/><path fill="#000" fill-rule="evenodd" d="M13.5 16h-3.379l-1 1H13.5a2.5 2.5 0 0 0 2.5-2.5v-.586l1.293 1.293A1 1 0 0 0 19 14.5v-5a1 1 0 0 0-1.532-.847L15 11.121V14.5a1.5 1.5 0 0 1-1.5 1.5m2.5-3.5 2 2v-5l-2 2z" clip-rule="evenodd"/>
  </svg>
</template>
