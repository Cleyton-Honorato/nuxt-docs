<template>
  <button 
    class="theme-toggle"
    @click="toggleTheme"
    :title="buttonTitle"
  >
    <template v-if="currentTheme === 'dark'">
      <span class="icon">☀️</span>
    </template>
    <template v-else-if="currentTheme === 'light'">
      <span class="icon">🌙</span>
    </template>
    <template v-else>
      <span class="icon">💻</span>
    </template>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from '~/composables/useTheme';

const { theme, effectiveTheme, setTheme } = useTheme();

const currentTheme = computed(() => theme.value);

const buttonTitle = computed(() => {
  switch (theme.value) {
    case 'dark': return 'Mudar para modo claro';
    case 'light': return 'Mudar para modo escuro';
    case 'system': return 'Mudar para modo do sistema';
    default: return 'Alternar tema';
  }
});

const toggleTheme = () => {
  if (theme.value === 'light') {
    setTheme('dark');
  } else if (theme.value === 'dark') {
    setTheme('system');
  } else {
    setTheme('light');
  }
};
</script>

<style scoped>
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 0.25rem;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  background-color: var(--card-bg);
}

.theme-toggle:hover {
  background-color: var(--border-color);
}

.icon {
  line-height: 1;
}

@media (max-width: 768px) {
  .theme-toggle {
    width: 2.25rem;
    height: 2.25rem;
    font-size: 1.125rem;
  }
}
</style> 