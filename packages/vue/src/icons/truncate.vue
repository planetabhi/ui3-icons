
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Truncate',
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
    <path fill="#000" fill-rule="evenodd" d="M5.702 15.273a.49.49 0 0 0 .462-.327l.583-1.665h2.89l.584 1.664a.489.489 0 1 0 .92-.328L8.923 8.511a.776.776 0 0 0-1.458 0l-2.222 6.106a.49.49 0 0 0 .46.656m3.638-2.845L8.232 9.263a.04.04 0 0 0-.076 0l-1.11 3.165z" clip-rule="evenodd"/><path fill="#000" d="M12.933 15.337a.65.65 0 0 1-.476-.2.65.65 0 0 1-.199-.475.65.65 0 0 1 .2-.476.65.65 0 0 1 .475-.199.65.65 0 0 1 .476.2.65.65 0 0 1 .199.475q0 .18-.093.337a.7.7 0 0 1-.245.245.63.63 0 0 1-.337.093m2.217-.199a.65.65 0 0 0 .476.199q.188 0 .337-.093a.7.7 0 0 0 .245-.245.65.65 0 0 0 .093-.337.65.65 0 0 0-.2-.476.65.65 0 0 0-.475-.199.65.65 0 0 0-.476.2.65.65 0 0 0-.199.475.65.65 0 0 0 .199.476m2.693 0a.65.65 0 0 0 .476.199q.189 0 .338-.093a.7.7 0 0 0 .245-.245.65.65 0 0 0 .092-.337.65.65 0 0 0-.199-.476.65.65 0 0 0-.476-.199.65.65 0 0 0-.476.2.65.65 0 0 0-.198.475.65.65 0 0 0 .198.476"/>
  </svg>
</template>
