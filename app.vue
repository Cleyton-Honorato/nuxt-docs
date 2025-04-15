<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">Botões no Nuxt</h1>
    <div class="flex gap-4 flex-wrap">
      <BaseButton variant="primary">Botão Primário</BaseButton>
      <BaseButton variant="secondary">Botão Secundário</BaseButton>
      <BaseButton variant="outline">Botão Outline</BaseButton>
    </div>
    <div class="mt-4 flex gap-4 flex-wrap">
      <BaseButton size="small">Botão Pequeno</BaseButton>
      <BaseButton>Botão Médio</BaseButton>
      <BaseButton size="large">Botão Grande</BaseButton>
    </div>
  </div>
</template>
