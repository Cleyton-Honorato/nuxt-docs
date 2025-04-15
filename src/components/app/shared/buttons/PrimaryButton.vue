<template>
  <button
    :class="[
      'primary-button',
      'primary-button--vintage',
      { 'primary-button--block': block }
    ]"
    :type="type"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <div class="primary-button__container">
      <img src="~/assets/images/left.svg" alt="" class="primary-button__edge primary-button__edge--left" />
      <img src="~/assets/images/diamond.svg" alt="" class="primary-button__diamond primary-button__diamond--top" />
      <div class="primary-button__content">
        <span class="primary-button__text">
          <slot></slot>
        </span>
      </div>
      <img src="~/assets/images/right.svg" alt="" class="primary-button__edge primary-button__edge--right" />
      <img src="~/assets/images/diamond.svg" alt="" class="primary-button__diamond primary-button__diamond--bottom" />
    </div>
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'vintage';
  type?: 'button' | 'submit' | 'reset';
  block?: boolean;
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  variant: 'vintage',
  type: 'button',
  block: false,
  disabled: false
})

defineEmits(['click']);
</script>

<style scoped lang="scss">
@use '~/styles/variables' as vars;

.primary-button {
  font-family: 'Cormorant', serif;
  position: relative;
  border: none;
  cursor: pointer;
  padding: 0;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  max-width: 100%;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    .primary-button__container {
      transform: scale(1.03);
    }
    
    .primary-button__edge {
      &--left {
        transform: translateX(-85%) scale(1.03);
      }
      
      &--right {
        transform: translateX(90%) scale(1.03);
      }
    }
  }

  &:active {
    .primary-button__container {
      transform: scale(0.99);
      transition: transform 0.1s ease;
    }
  }

  // Block
  &--block {
    width: 100%;

    .primary-button__container {
      width: 100%;
    }
  }

  // Variant Vintage
  &--vintage {
    .primary-button__content {
      background: radial-gradient(circle at center, #F6F3EB, vars.$button-vintage-bg);
      color: #000;
      transition: all 0.35s ease;
    }

    &:hover {
      .primary-button__content {
        letter-spacing: 0.06em;
      }
    }
  }

  &__container {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 0;
    transform-origin: center;
    transition: transform 0.35s ease-out;
    overflow: visible;
  }

  &__content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 11px 17px;
    font-size: 1.1rem;
    z-index: 1;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    transition: all 0.35s ease-out;
    background-clip: padding-box;
  }

  &__diamond {
    position: absolute;
    transform: rotate(0deg);
    z-index: 2;
    transition: transform 0.35s ease-out;
    width: 14px;
    height: 14px;
    pointer-events: none;

    &--top {
      left: 50%;
      margin-left: -7px;
      top: 0;
      transform: translateY(-50%);
    }

    &--bottom {
      left: 50%;
      margin-left: -7px;
      bottom: 0;
      transform: translateY(50%);
    }
  }

  &__edge {
    position: absolute;
    top: 0; 
    height: 100%; 
    z-index: 1;
    transition: transform 0.35s ease-out;
    pointer-events: none;
    
    &--left { 
      left: 0;
      transform: translateX(-90%);
    }
    
    &--right {
      right: 0;
      transform: translateX(95%);
    }
  }

  &__text {
    position: relative;
  }
}
</style> 