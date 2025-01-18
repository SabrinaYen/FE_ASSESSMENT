<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import BannerComponent from './components/BannerComponent.vue';
</script>

<template>
  <HeaderComponent />
  <BannerComponent />
  <RouterView />
</template>
<script></script>
