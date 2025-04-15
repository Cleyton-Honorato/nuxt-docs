<template>
  <div class="home-page">
    <section class="hero">
      <h1 class="hero-title">Bem-vindo ao Nuxt Docs</h1>
      <p class="hero-subtitle">Uma aplicação Nuxt.js moderna com TypeScript</p>
      <div class="hero-buttons">
        <AppButton size="large" @click="navigateToGettingStarted">Começar</AppButton>
        <AppButton variant="outline" size="large" @click="navigateToAbout">Saiba Mais</AppButton>
      </div>
    </section>

    <section class="features">
      <div class="feature-card">
        <h2 class="feature-title">TypeScript</h2>
        <p class="feature-description">Construído com suporte completo ao TypeScript para segurança de tipos</p>
        <AppButton 
          variant="secondary" 
          size="small" 
          class="feature-button"
          @click="navigateToTypeScriptDocs"
        >Saiba Mais</AppButton>
      </div>
      
      <div class="feature-card">
        <h2 class="feature-title">Estruturado</h2>
        <p class="feature-description">Organizado com uma estrutura de pastas limpa</p>
        <AppButton 
          variant="secondary" 
          size="small" 
          class="feature-button"
          @click="navigateToNuxtDocs"
        >Saiba Mais</AppButton>
      </div>
      
      <div class="feature-card">
        <h2 class="feature-title">Responsivo</h2>
        <p class="feature-description">Design totalmente responsivo para todos os dispositivos</p>
        <AppButton 
          variant="secondary" 
          size="small" 
          class="feature-button"
          @click="navigateToResponsiveDocs"
        >Saiba Mais</AppButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

definePageMeta({
  layout: 'default'
})

const router = useRouter()

const navigateToTypeScriptDocs = () => {
  window.open('https://www.typescriptlang.org/docs/', '_blank')
}

const navigateToNuxtDocs = () => {
  window.open('https://nuxt.com/docs/getting-started/introduction', '_blank')
}

const navigateToResponsiveDocs = () => {
  window.open('https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout/Responsive_Design', '_blank')
}

const navigateToGettingStarted = () => {
  router.push('/design-system')
}

const navigateToAbout = () => {
  router.push('/about')
}
</script>

<style scoped>
.home-page {
  padding: 1rem 0;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--secondary-color);
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-card {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-title {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.feature-description {
  color: var(--text-color);
  margin-bottom: 1.5rem;
}

.feature-button {
  margin-top: auto;
  align-self: flex-start;
}

/* Responsive styles */
@media (max-width: 768px) {
  .features {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .features {
    grid-template-columns: 1fr;
  }
  
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
}
</style> 