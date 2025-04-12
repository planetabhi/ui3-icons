
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ArrowDownward',
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
    <path fill="#000" d="M12.5 7a.5.5 0 0 0-.5.5v6.789l-2.388-2.4a.5.5 0 0 0-.709.706l3.243 3.258a.5.5 0 0 0 .708 0l3.243-3.258a.5.5 0 0 0-.709-.705L13 14.289V7.5a.5.5 0 0 0-.5-.5"/>
  </svg>
</template>
