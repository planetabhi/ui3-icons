
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Interclick',
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
    <path fill="#000" d="M9.321 5.533a.5.5 0 0 1 .653.27l.777 1.875c.102.246-.039.524-.285.627s-.537.002-.639-.244l-.776-1.875a.5.5 0 0 1 .27-.653M8.06 9.827l-1.874-.776a.5.5 0 1 0-.383.923l1.875.777c.246.102.524-.039.626-.285.103-.245.003-.537-.243-.639m-.383 3.422-1.875.776a.5.5 0 1 0 .383.924l1.875-.776c.246-.102.346-.394.243-.64-.102-.245-.38-.386-.626-.284m2.149 2.69-.777 1.875a.5.5 0 0 0 .924.383l.777-1.875c.102-.246-.04-.524-.285-.627s-.537-.002-.639.244m6.495-5.189 1.874-.776a.5.5 0 0 0-.382-.923l-1.875.776c-.246.102-.346.394-.244.64.102.245.381.386.627.284M14.173 8.06l.776-1.874a.5.5 0 1 0-.924-.383l-.776 1.875c-.102.246.039.524.284.626.246.103.538.003.64-.243"/><path fill="#000" fill-rule="evenodd" d="M12.351 11.064a1 1 0 0 0-1.287 1.287l2.25 6a1 1 0 0 0 1.906-.108l.605-2.418 2.418-.605a1 1 0 0 0 .108-1.906zM15 15l-.75 3L12 12l6 2.25z" clip-rule="evenodd"/>
  </svg>
</template>
