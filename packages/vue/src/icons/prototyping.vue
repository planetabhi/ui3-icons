
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Prototyping',
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
    <path fill="#000" fill-rule="evenodd" d="M13.418 18.628a8 8 0 1 1 5.21-5.21l1.723.646a1 1 0 0 1-.108 1.906l-3.418.855-.855 3.418a1 1 0 0 1-1.906.108zm-.352-.938a7 7 0 1 1 4.624-4.624l-1.878-.704A5.005 5.005 0 0 0 11 6a5 5 0 1 0 1.362 9.812zm-1.057-2.818a4 4 0 1 1 2.863-2.863l-1.894-.71q.021-.146.022-.299a2 2 0 1 0-1.701 1.978zM12 11a1 1 0 0 0-1 1 1 1 0 1 1 1-1m4 5-1 4-3-8 8 3z" clip-rule="evenodd"/>
  </svg>
</template>
