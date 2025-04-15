<template>
  <button
    :class="[
      'app-button',
      `app-button--${variant}`,
      `app-button--${size}`,
      { 'app-button--block': block }
    ]"
    :type="type"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  block?: boolean;
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  type: 'button',
  block: false,
  disabled: false
})
</script>

<style scoped>
.app-button {
  font-family: inherit;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.app-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Variants */
.app-button--primary {
  background-color: var(--primary-color);
  color: white;
}

.app-button--primary:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--primary-color) 90%, black);
}

.app-button--secondary {
  background-color: var(--secondary-color);
  color: white;
}

.app-button--secondary:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--secondary-color) 90%, black);
}

.app-button--outline {
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.app-button--outline:hover:not(:disabled) {
  background-color: rgba(0, 220, 130, 0.1);
}

/* Sizes */
.app-button--small {
  padding: 0.4rem 0.8rem;
  font-size: 0.875rem;
}

.app-button--medium {
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
}

.app-button--large {
  padding: 0.8rem 1.5rem;
  font-size: 1.125rem;
}

/* Block */
.app-button--block {
  width: 100%;
  display: flex;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .app-button--large {
    padding: 0.7rem 1.3rem;
  }
}

@media (max-width: 480px) {
  .app-button--small {
    padding: 0.3rem 0.7rem;
  }
  
  .app-button--medium {
    padding: 0.5rem 1rem;
  }
  
  .app-button--large {
    padding: 0.6rem 1.2rem;
  }
}
</style> 