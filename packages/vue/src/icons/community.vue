
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Community',
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
    <path fill="#000" fill-rule="evenodd" d="M17.981 11a6.5 6.5 0 1 0 0 1H18v-1zm-6.063 5.759c-.237.222-.38.241-.418.241-.039 0-.181-.02-.418-.241-.235-.22-.497-.58-.742-1.094-.44-.92-.768-2.204-.83-3.665h3.98c-.062 1.46-.39 2.745-.83 3.665-.245.513-.507.875-.742 1.094M13.49 11H9.51c.062-1.46.39-2.745.83-3.665.245-.513.507-.875.742-1.094.237-.222.38-.241.418-.241.039 0 .181.02.418.241.235.22.497.58.742 1.094.44.92.768 2.204.83 3.665m1 1c-.075 1.937-.583 3.636-1.274 4.727A5.5 5.5 0 0 0 16.978 12zm2.488-1H14.49c-.075-1.937-.583-3.636-1.274-4.727A5.5 5.5 0 0 1 16.978 11M8.51 11c.075-1.937.583-3.636 1.274-4.727A5.5 5.5 0 0 0 6.022 11zm-2.488 1a5.5 5.5 0 0 0 3.762 4.727c-.69-1.091-1.199-2.79-1.274-4.727z" clip-rule="evenodd"/>
  </svg>
</template>
