<template>
  <svg
    v-bind="$props"
    viewBox="0 0 24 24"
    fill="none"
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
<script>
    export default {
        props: {
            width: { type: [String, Number], default: 24 },
            height: { type: [String, Number], default: 24 },
            fill: { type: String, default: "currentColor" },
        }
    }
</script>
