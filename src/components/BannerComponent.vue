<template>
  <div class="bg-[#35bad8]">
    <div class="header-container flex justify-between  w-full items-center h-full">
      <div class="relative flex items-end justify-around relative gap-5 py-5">
        <div class="relative w-[120px] h-[120px]">
          <img class="w-auto absolute bottom-[-50px]" src="../assets/Avatar.png" />
        </div>
        <div class="info-container text-white">
          <h1 class="text-3xl">John Doe</h1>
          <h4 class="font-thin">Last online: 2 days ago</h4>
        </div>
        <div class="text-white flex gap-4">
          <button @mouseover="hoverSend = true" @mouseout="hoverSend = false" class="border-[#FFFFFF] max-h-[100px] p-[12px] hover:border-[#35bad8] hover:bg-[#FFFFFF] hover:text-[#35bad8] text-normal font-thin inline-block flex items-center gap-2 rounded-lg" @click="popup">
            <IconMsg width="24" height="24" :fill="hoverSend ? '#35bad8' : '#ffffff'" />
            <span class="text-xs font-bold">Send Message</span>
          </button>
          <button @mouseover="hoverAdd = true" @mouseout="hoverAdd = false" 
            class="border-[#FFFFFF] max-h-[100px] p-[12px] hover:border-[#35bad8] hover:bg-[#FFFFFF] hover:text-[#35bad8] text-normal font-thin flex items-center gap-2 rounded-lg" @click="popup">
            <IconAdd width="24" height="24" :fill="hoverAdd ? '#35bad8' : '#ffffff'" />
            <span class="text-xs font-bold">Add Friend</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconAdd from '@/components/IconSvg/IconAdd.vue'; 
import IconMsg from '@/components/IconSvg/IconMsg.vue';

export default defineComponent({
  name: 'BannerComponent',
  components: {
    IconAdd,
    IconMsg,
  },
  data() {
    return {
      hoverAdd: false,
      hoverSend: false,
    }
  },
  methods: {
    popup() {
      alert("Apologize there's no function ya. hehe");
    },
  },
});
</script>
<style lang="css" scoped>
/* .message-container>button {
  border: 1px solid white;
  border-radius: 8px;
  padding: 12px;
  max-height: 100px;
} */

.message-container>button:hover {
  background-color: white;
  color: #35bad8;
}
</style>
