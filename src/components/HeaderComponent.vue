<template>
  <div>
    <div class="header-container flex justify-between w-full items-center">
      <div class="logo">
        <img class="w-1/2" src="../assets/Logo.png" />
      </div>
      <div class="setting-container flex float-right justify-end gap-5">
        <button class="ic-notice bg-no-repeat md:w-[30px]" @click="popup">
          <img src="../assets/icons/ic-notification.svg" />
        </button>
        <button class="ic-setting bg-no-repeat md:w-[30px]" @click="popup">
          <img src="../assets/icons/ic-setting.svg" />
        </button>
        <button class="ic-logout bg-no-repeat md:w-[30px]" @click="popup">
          <img src="../assets/icons/ic-logout.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HeaderComponent',
  methods: {
    popup() {
      alert("Apologize there's no function ya. hehe");
    },
  },
});
</script>
