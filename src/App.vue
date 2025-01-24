<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import BannerComponent from './components/BannerComponent.vue';
</script>

<template>
  <div>
    <HeaderComponent  class="px-[100px]"/>
    <BannerComponent class="px-[100px]"/>
    <RouterView class="px-[100px]"/>
  </div>
</template>
