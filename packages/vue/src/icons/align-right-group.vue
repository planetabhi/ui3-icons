
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AlignRightGroup',
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
    <path fill="#000" d="M18.5 18a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 1 0v12a.5.5 0 0 1-.5.5M6 9.25c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75zm4 5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75z"/><path fill="#000" fill-opacity=".3" fill-rule="evenodd" d="M16 17.5a.5.5 0 0 1-.5.5H5.25C4.56 18 4 17.44 4 16.75V6.25C4 5.56 4.56 5 5.25 5H15.5a.5.5 0 0 1 0 1H5.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25H15.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"/>
  </svg>
</template>
