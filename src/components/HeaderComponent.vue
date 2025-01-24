<template>
  <header class="header">
    <div class="header-container flex justify-between w-full items-center">
      <div class="logo">
        <img src="../assets/Logo.png" />
      </div>
      <div class="setting-container flex float-right justify-end gap-5">
        <button class="ic-notice bg-no-repeat" @click="popup">
          <img src="../assets/icons/ic-notification.svg" />
        </button>
        <button class="ic-setting bg-no-repeat" @click="popup">
          <img src="../assets/icons/ic-setting.svg" />
        </button>
        <button class="ic-logout bg-no-repeat" @click="popup">
          <img src="../assets/icons/ic-logout1.svg" />
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomeView',
  methods: {
    popup() {
      alert("Apologize there's no function ya. hehe");
    },
  },
});
</script>
<style lang="css" scoped>
img {
  width: 50%;
}
</style>
