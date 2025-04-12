
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Shuffle',
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
    <path fill="#000" d="m17.291 16-1.145 1.146a.5.5 0 0 0 .708.707l2-2a.5.5 0 0 0 0-.707l-2-2a.5.5 0 0 0-.708.707L17.292 15h-1.348a3.5 3.5 0 0 1-2.751-1.337l-.036-.045-.632.81A4.5 4.5 0 0 0 15.945 16zM9.975 9.574a4.5 4.5 0 0 0-3.42-1.575H5.5A.5.5 0 0 0 5.5 9h1.056a3.5 3.5 0 0 1 2.752 1.338l.035.045zm7.317-1.575-1.146-1.146a.5.5 0 0 1 .708-.707l2 2a.5.5 0 0 1 0 .707l-2 2a.5.5 0 1 1-.708-.707L17.292 9h-1.348a3.5 3.5 0 0 0-2.752 1.337l-3.097 3.943A4.5 4.5 0 0 1 6.555 16H5.5a.5.5 0 0 1 0-1.001h1.056a3.5 3.5 0 0 0 2.752-1.337l3.097-3.943a4.5 4.5 0 0 1 3.54-1.72z"/>
  </svg>
</template>
