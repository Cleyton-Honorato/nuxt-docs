<template>
  <div class="design-system-page">
    <h1 class="ds-title">Sistema de Design</h1>
    
    <section class="ds-section">
      <h2 class="section-title">Cores</h2>
      <div class="color-palette">
        <div class="color-item">
          <div class="color-preview" style="background-color: var(--primary-color)"></div>
          <div class="color-info">
            <h3>Primária</h3>
            <code>#00dc82</code>
          </div>
        </div>
        
        <div class="color-item">
          <div class="color-preview" style="background-color: var(--secondary-color)"></div>
          <div class="color-info">
            <h3>Secundária</h3>
            <code>#333</code>
          </div>
        </div>
        
        <div class="color-item">
          <div class="color-preview" style="background-color: var(--background-color); border: 1px solid #eee;"></div>
          <div class="color-info">
            <h3>Fundo</h3>
            <code>#fff</code>
          </div>
        </div>
        
        <div class="color-item">
          <div class="color-preview" style="background-color: var(--text-color)"></div>
          <div class="color-info">
            <h3>Texto</h3>
            <code>#333</code>
          </div>
        </div>
      </div>
    </section>
    
    <section class="ds-section">
      <h2 class="section-title">Tipografia</h2>
      <div class="typography-examples">
        <div class="type-item">
          <h1>Título 1</h1>
          <code>font-size: 2.5rem</code>
        </div>
        <div class="type-item">
          <h2>Título 2</h2>
          <code>font-size: 2rem</code>
        </div>
        <div class="type-item">
          <h3>Título 3</h3>
          <code>font-size: 1.5rem</code>
        </div>
        <div class="type-item">
          <p class="body-text">Texto de Corpo</p>
          <code>font-size: 1rem</code>
        </div>
        <div class="type-item">
          <p class="small-text">Texto Pequeno</p>
          <code>font-size: 0.875rem</code>
        </div>
      </div>
    </section>
    
    <section class="ds-section">
      <h2 class="section-title">Botões</h2>
      <div class="button-showcase">
        <div class="button-group">
          <h3 class="component-subtitle">Variantes</h3>
          <div class="button-row">
            <div>
              <AppButton>Primário</AppButton>
              <p>Primário</p>
            </div>
            <div>
              <AppButton variant="secondary">Secundário</AppButton>
              <p>Secundário</p>
            </div>
            <div>
              <AppButton variant="outline">Contorno</AppButton>
              <p>Contorno</p>
            </div>
          </div>
        </div>
        
        <div class="button-group">
          <h3 class="component-subtitle">Tamanhos</h3>
          <div class="button-row">
            <div>
              <AppButton size="small">Pequeno</AppButton>
              <p>Pequeno</p>
            </div>
            <div>
              <AppButton size="medium">Médio</AppButton>
              <p>Médio</p>
            </div>
            <div>
              <AppButton size="large">Grande</AppButton>
              <p>Grande</p>
            </div>
          </div>
        </div>
        
        <div class="button-group">
          <h3 class="component-subtitle">Estados</h3>
          <div class="button-row">
            <div>
              <AppButton>Normal</AppButton>
              <p>Normal</p>
            </div>
            <div>
              <AppButton disabled>Desativado</AppButton>
              <p>Desativado</p>
            </div>
            <div>
              <AppButton block>Bloco</AppButton>
              <p>Bloco</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="ds-section">
      <h2 class="section-title">Contêineres Responsivos</h2>
      <div class="responsive-demo">
        <div class="container container-demo">
          <p>Este é um contêiner responsivo (largura máxima: 1200px)</p>
        </div>
      </div>
      <p class="demo-instruction">Redimensione seu navegador para ver como este contêiner se adapta a diferentes tamanhos de tela.</p>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.design-system-page {
  max-width: 1000px;
  margin: 0 auto;
}

.ds-title {
  font-size: 2.2rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
}

.ds-section {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.component-subtitle {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

/* Colors */
.color-palette {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.color-item {
  display: flex;
  flex-direction: column;
}

.color-preview {
  height: 80px;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.color-info h3 {
  margin: 0;
  font-size: 1rem;
}

.color-info code {
  font-size: 0.875rem;
  background: #eee;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
}

/* Typography */
.typography-examples {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.type-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
}

.type-item code {
  background: #eee;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.875rem;
}

.body-text {
  font-size: 1rem;
}

.small-text {
  font-size: 0.875rem;
}

/* Buttons */
.button-showcase {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.button-group {
  margin-bottom: 1rem;
}

.button-row {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.button-row > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.button-row p {
  font-size: 0.875rem;
  color: var(--secondary-color);
}

/* Responsive Container Demo */
.container-demo {
  background-color: rgba(0, 220, 130, 0.1);
  border: 2px dashed var(--primary-color);
  padding: 2rem;
  text-align: center;
}

.demo-instruction {
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
  font-style: italic;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .color-palette {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .button-row {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .button-row > div {
    width: 100%;
  }
  
  .ds-section {
    padding: 1.5rem;
  }
  
  .ds-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .color-palette {
    grid-template-columns: 1fr;
  }
  
  .type-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .ds-title {
    font-size: 1.5rem;
  }
}
</style> 