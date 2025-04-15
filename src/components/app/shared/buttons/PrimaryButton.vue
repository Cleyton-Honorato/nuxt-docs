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
@use '~/styles/buttons';

.primary-button {
  @extend %button-base;
  border: none;

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

  // Block
  &--block {
    @extend %button-block;
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

  &__text {
    @extend %button-text;
  }
}
</style> 