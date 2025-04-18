import { ref, watch, onMounted, computed, onUnmounted } from 'vue'
import type { Theme } from '../types'

export function useTheme() {
  const theme = ref<Theme>('system')
  
  const systemTheme = ref<'light' | 'dark'>('light')
  
  // Get the effective theme (accounting for system preference)
  const effectiveTheme = computed(() => {
    if (theme.value === 'system') {
      return systemTheme.value
    }
    return theme.value
  })
  
  // Set theme in both state and DOM
  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    localStorage.setItem('app-theme', newTheme)
  }
  
  // Detect system theme
  const detectSystemTheme = () => {
    if (typeof window !== 'undefined') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      systemTheme.value = isDark ? 'dark' : 'light'
    }
  }
  
  // Update document with current theme
  const updateDocumentTheme = () => {
    if (typeof document !== 'undefined') {
      const html = document.documentElement
      
      // Remova todas as classes de tema primeiro
      html.classList.remove('dark-theme', 'light-theme')
      
      if (effectiveTheme.value === 'dark') {
        html.classList.add('dark-theme')
      } else {
        html.classList.add('light-theme')
      }
    }
  }
  
  // Watch for changes in system theme
  const setupSystemThemeListener = () => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      // Verificar se o browser suporta addListener (alguns browsers antigos)
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', detectSystemTheme);
      } else if (mediaQuery.addListener) {
        // Fallback para browsers mais antigos
        mediaQuery.addListener(detectSystemTheme);
      }
    }
  }
  
  // Cleanup function
  const cleanupListeners = () => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', detectSystemTheme);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(detectSystemTheme);
      }
    }
  }
  
  // Initialize
  onMounted(() => {
    // Load saved theme preference from localStorage
    const savedTheme = localStorage.getItem('app-theme') as Theme | null
    if (savedTheme) {
      theme.value = savedTheme
    }
    
    // Detect system preference
    detectSystemTheme()
    
    // Setup listener for system theme changes
    setupSystemThemeListener()
    
    // Update document theme immediately
    updateDocumentTheme()
  })
  
  // Cleanup on unmount
  onUnmounted(() => {
    cleanupListeners();
  })
  
  // Update document when theme changes
  watch(effectiveTheme, updateDocumentTheme, { immediate: true })
  
  return {
    theme,
    effectiveTheme,
    setTheme,
    isSystemTheme: computed(() => theme.value === 'system'),
    isDarkTheme: computed(() => effectiveTheme.value === 'dark'),
    isLightTheme: computed(() => effectiveTheme.value === 'light')
  }
} 