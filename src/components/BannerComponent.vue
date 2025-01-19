<template>
  <section class="header w-full">
    <div
      class="header-container flex justify-around w-full items-center h-full"
    >
      <div class="logo flex items-end justify-around relative gap-5 pb-5">
        <div class="relative w-[150px] h-[120px]">
          <img
            class="absolute -bottom-[50px] w-auto"
            src="../assets/Avatar.png"
          />
        </div>
        <div class="info-container text-white">
          <h1 class="text-3xl">John Doe</h1>
          <h4 class="font-thin">Last online: 2 days ago</h4>
        </div>
        <div class="message-container text-white flex gap-4">
          <button class="text-normal font-thin" @click="popup">
            <span>Send Message</span>
          </button>
          <button class="text-normal font-thin" @click="popup">
            <span>Add Friend</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BannerComponent',
  methods: {
    popup() {
      alert("Apologize there's no function ya. hehe");
    },
  },
});
</script>
<style lang="css">
img {
  width: 50%;
}

section {
  background-color: #35bad8;
}

.message-container > button {
  border: 1px solid white;
  border-radius: 8px;
  padding: 12px;
  max-height: 100px;
}
.message-container > button:hover {
  background-color: white;
  color: #35bad8;
}
</style>
