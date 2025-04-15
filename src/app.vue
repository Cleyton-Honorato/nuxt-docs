<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme';

// Inicializar o tema ao carregar a aplicação
const { theme, effectiveTheme, setTheme } = useTheme();
</script>

<style>
/* Global styles can be defined here */
</style> 