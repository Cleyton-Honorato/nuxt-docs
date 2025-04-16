<template>
  <div class="simple-separator-container">
    <img 
      src="~/assets/images/ellipse_point_left.svg" 
      alt="" 
      class="separator-icon separator-icon--left"
    />
    <div class="separator-line simple-separator"></div>
    <img 
      src="~/assets/images/ellipse_point_right.svg" 
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

.simple-separator-container {
  @extend %separator-container;
}

.simple-separator {
  height: separators.$separator-height-simple;
}
</style> 