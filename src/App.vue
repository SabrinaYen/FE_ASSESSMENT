<script setup lang="ts">
// Route
import { RouterView } from 'vue-router';
//Component
import HeaderComponent from '@/components/HeaderComponent.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';
</script>

<template>
    <LoadingComponent />
    <HeaderComponent class="px-[100px]" />
    <BannerComponent class="px-[100px]" />
    <RouterView class="px-[100px]" />
</template>
