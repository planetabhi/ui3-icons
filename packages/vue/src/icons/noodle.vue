
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Noodle',
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
    <path fill="#000" fill-rule="evenodd" d="m20.854 6.854-3 3a.5.5 0 0 1-.708-.708L19.293 7H15.5A2.5 2.5 0 0 0 13 9.5v5A3.5 3.5 0 0 1 9.5 18h-.55a2.5 2.5 0 1 1 0-1h.55a2.5 2.5 0 0 0 2.5-2.5v-5A3.5 3.5 0 0 1 15.5 6h3.793l-2.147-2.146a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708M8 17.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" clip-rule="evenodd"/>
  </svg>
</template>
