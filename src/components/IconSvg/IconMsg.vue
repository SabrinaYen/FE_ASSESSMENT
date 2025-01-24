<template>
  <svg v-bind="$props" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229" :stroke="fill"
        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </g></svg>
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
