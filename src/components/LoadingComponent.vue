<template>
    <div v-if="isLoading" class="loading-overlay gap-2 flex">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useLoadingStore } from '@/stores';
  export default defineComponent({
    name: 'LoadingOverlay',
    computed: {
        isLoading() {
            const loadingStore = useLoadingStore();
            return loadingStore.loading;
        }
    }
  });
  </script>
  
  <style scoped>
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    z-index: 9999;
  }
  
  .spinner {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  