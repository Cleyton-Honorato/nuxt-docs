<template>
  <button
    :class="[
      'secondary-button',
      'secondary-button--vintage',
      { 'secondary-button--block': block }
    ]"
    :type="type"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <div class="secondary-button__container">
      <img src="~/assets/images/vector_left.svg" alt="" class="secondary-button__edge secondary-button__edge--left" />
      <img src="~/assets/images/rectangle_left.svg" alt="" class="secondary-button__rectangle secondary-button__rectangle--left" />
      <img src="~/assets/images/diamond_black.svg" alt="" class="secondary-button__diamond secondary-button__diamond--top" />
      <div class="secondary-button__content">
        <span class="secondary-button__text">
          <slot></slot>
        </span>
      </div>
      <img src="~/assets/images/rectangle_right.svg" alt="" class="secondary-button__rectangle secondary-button__rectangle--right" />
      <img src="~/assets/images/vector_right.svg" alt="" class="secondary-button__edge secondary-button__edge--right" />
      <img src="~/assets/images/diamond_black.svg" alt="" class="secondary-button__diamond secondary-button__diamond--bottom" />
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

.secondary-button {
  font-family: 'Cormorant', serif;
  position: relative;
  border-bottom: 1px solid #FFF7DF;
  border-top: 1px solid #FFF7DF;
  cursor: pointer;
  padding: 0;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease, border-color 0.2s ease;
  max-width: 100%;
  box-shadow: 0 0 0 rgba(255, 247, 223, 0);

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    border-bottom: 1px solid #FFF7DF;
    border-top: 1px solid #FFF7DF;
    
    .secondary-button__container {
      transform: scale(1.03);
    }
    
    .secondary-button__edge {
      &--left {
        transform: translateX(-90%) scale(1.03);
      }
      
      &--right {
        transform: translateX(90%) scale(1.03);
      }
    }
  }

  &:active {
    .secondary-button__container {
      transform: scale(0.99);
      transition: transform 0.1s ease;
    }
  }

  // Block
  &--block {
    width: 100%;

    .secondary-button__container {
      width: 100%;
    }
  }

  // Variant Vintage
  &--vintage {
    .secondary-button__content {
      background: linear-gradient(to right, #3F2819, #030206, #3F2819);
      color: #fff;
      border: none;
      transition: all 0.35s ease;
    }
    
    &:hover {
      .secondary-button__content {
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
      transform: translateX(90%);
    }
  }

  &__rectangle {
    position: absolute;
    top: 50%;
    z-index: 2;
    transition: transform 0.35s ease-out;
    pointer-events: none;
    
    &--left {
      left: -6px;
      transform: translate(-50%, -50%);
    }
    
    &--right {
      right: -6px;
      transform: translate(50%, -50%);
    }
  }

  &__text {
    position: relative;
  }
}
</style> 