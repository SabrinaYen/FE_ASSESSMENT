<template>
  <svg
    :width="width" 
    :height="height" 
    :fill="fill"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Edit / Add_Plus">
      <path
        id="Vector"
        d="M6 12H12M12 12H18M12 12V18M12 12V6"
        :stroke="fill"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name:"IconAdd",
    props: {
        width: { type: [String, Number], default: 24 },
        height: { type: [String, Number], default: 24 },
        fill: { type: String, default: "currentColor" },
    }
});
</script>

