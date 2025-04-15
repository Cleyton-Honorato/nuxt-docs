<template>
  <div class="about-page">
    <h1 class="about-title">Sobre este Projeto</h1>
    
    <section class="about-content">
      <p>
        Este é um projeto Nuxt.js construído com TypeScript seguindo padrões de arquitetura moderna.
        A estrutura do projeto está organizada dentro do diretório <code>/src</code> para melhor manutenção.
      </p>
      
      <h2 class="section-title">Recursos</h2>
      <ul class="features-list">
        <li>Integração com TypeScript</li>
        <li>Arquitetura moderna do Nuxt.js</li>
        <li>Design responsivo</li>
        <li>Estrutura de arquivos organizada</li>
        <li>Vue 3 Composition API</li>
      </ul>
      
      <h2 class="section-title">Estrutura do Projeto</h2>
      <pre class="code-block">
src/
├── assets/
│   ├── css/
│   └── images/
├── components/
├── composables/
├── layouts/
├── middleware/
├── pages/
├── plugins/
├── store/
└── types/
      </pre>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;
}

.about-title {
  font-size: 2.2rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
}

.about-content {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin: 1.5rem 0 1rem;
}

.features-list {
  list-style-type: none;
  padding: 0;
}

.features-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  position: relative;
  padding-left: 1.5rem;
}

.features-list li::before {
  content: "✓";
  color: var(--primary-color);
  position: absolute;
  left: 0;
}

.code-block {
  background-color: #333;
  color: #fff;
  padding: 1.5rem;
  border-radius: 4px;
  font-family: monospace;
  overflow-x: auto;
  margin: 1rem 0;
}

/* Responsive styles */
@media (max-width: 768px) {
  .about-title {
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
  
  .about-content {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .about-title {
    font-size: 1.5rem;
  }
  
  .code-block {
    font-size: 0.8rem;
  }
}
</style> 