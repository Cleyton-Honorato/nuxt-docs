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
@use '~/styles/buttons';

.secondary-button {
  @extend %button-base;
  border-bottom: 1px solid #FFF7DF;
  border-top: 1px solid #FFF7DF;
  box-shadow: 0 0 0 rgba(255, 247, 223, 0);

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

  // Block
  &--block {
    @extend %button-block;
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
    @extend %button-container;
  }

  &__content {
    @extend %button-content;
  }

  &__diamond {
    @extend %button-diamond;
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
    @extend %button-edge;

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
    @extend %button-text;
  }
}
</style> 