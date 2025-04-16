<template>
  <div class="arrow-separator-container">
    <div class="separator-line"></div>
    <img 
      src="~/assets/images/arrow-ellipse.svg" 
      alt="" 
      class="separator-icon separator-icon--right"
    />
  </div>
</template>

<script setup lang="ts">
// Sem propriedades
</script>

<style lang="scss" scoped>
@use '@/styles/separators';

.arrow-separator-container {
  @extend %separator-container;
}
</style> 