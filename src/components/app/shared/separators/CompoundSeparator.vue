<template>
  <div class="separator-container">
    <img 
      src="~/assets/images/left_arrow.svg" 
      alt="" 
      class="separator-icon separator-icon--close-left"
    />
    <div class="separator-line"></div>
    <img 
      src="~/assets/images/infinite.svg" 
      alt="" 
      class="separator-icon separator-icon--center infinite-icon"
    />
    <img 
      src="~/assets/images/right_arrow.svg" 
      alt="" 
      class="separator-icon separator-icon--close-right"
    />
  </div>
</template>

<script setup lang="ts">
// Sem propriedades
</script>

<style lang="scss" scoped>
@use '@/styles/separators';

.infinite-icon {
  position: absolute;
  transition: all 0.3s ease;
}
</style> 