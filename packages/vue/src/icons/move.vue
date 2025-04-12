
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Move',
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
    <path fill="#000" fill-rule="evenodd" d="M20.999 11.183a2 2 0 0 1-1.41 1.836l-5.024 1.546-1.546 5.023a2 2 0 0 1-3.773.143l-5.107-13A2 2 0 0 1 6.73 4.138l13 5.108A2 2 0 0 1 21 11.183m-7.235 2.581-1.701 5.53a1 1 0 0 1-1.887.072l-5.107-13a1 1 0 0 1 1.297-1.297l13 5.107a1 1 0 0 1-.072 1.887z" clip-rule="evenodd"/>
  </svg>
</template>
