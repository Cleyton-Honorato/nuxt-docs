<template>
  <div class="design-system-page">
    <h1 class="design-system-title">Sistema de Design</h1>
    
    <section class="design-system-section">
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
    
    <section class="design-system-section">
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
          <p class="font-description">Fonte Felix Titling: elegante e clássica, ideal para destaque de conteúdo</p>
        </div>
        <div class="type-item">
          <p class="small-text">Texto Pequeno</p>
          <code>font-size: 0.875rem</code>
          <p class="font-description">Fonte Calibri: moderna e legível, perfeita para textos pequenos e interfaces</p>
        </div>
        <div class="type-item">
          <p class="button-text">Texto de Botões</p>
          <code>font-family: Cormorant; font-weight: 600; font-size: 16px;</code>
          <p class="font-description">Fonte Cormorant: elegante e sofisticada, ideal para elementos de destaque como botões</p>
        </div>
      </div>
    </section>
    
    <section class="design-system-section">
      <h2 class="section-title">Botões Elegantes</h2>
      <div class="design-system-content">
        <p class="component-description">Botões são componentes interativos utilizados para ações dentro da aplicação.</p>
        
        <div class="button-group">
          <h3 class="component-subtitle">Botão Vintage</h3>
          <div class="button-row">
            <div>
              <PrimaryButton>Botão Vintage</PrimaryButton>
              <p>Primário</p>
            </div>
            <div>
              <SecondaryButton>Botão Vintage</SecondaryButton>
              <p>Secundário</p>
            </div>
          </div>
        </div>
        
        <div class="button-group">
          <h3 class="component-subtitle">Estados</h3>
          <div class="button-row">
            <div>
              <PrimaryButton>Normal</PrimaryButton>
              <p>Normal</p>
            </div>
            <div>
              <PrimaryButton disabled>Desativado</PrimaryButton>
              <p>Desativado</p>
            </div>
            <div>
              <PrimaryButton block>Bloco</PrimaryButton>
              <p>Bloco</p>
            </div>
          </div>
        </div>
        
        <div class="button-group">
          <h3 class="component-subtitle">Estados - Botão Secundário</h3>
          <div class="button-row">
            <div>
              <SecondaryButton>Normal</SecondaryButton>
              <p>Normal</p>
            </div>
            <div>
              <SecondaryButton disabled>Desativado</SecondaryButton>
              <p>Desativado</p>
            </div>
            <div>
              <SecondaryButton block>Bloco</SecondaryButton>
              <p>Bloco</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="design-system-section">
      <h2 class="section-title">Contêineres Responsivos</h2>
      <div class="responsive-demo">
        <div class="container container-demo">
          <p>Este é um contêiner responsivo (largura máxima: 1200px)</p>
        </div>
      </div>
      <p class="demo-instruction">Redimensione seu navegador para ver como este contêiner se adapta a diferentes tamanhos de tela.</p>
    </section>

    <section class="design-system-section">
      <h2 class="section-title">Separadores de Sessão</h2>
      <div class="design-system-content">
        <p class="component-description">Separadores são elementos visuais que ajudam a organizar o conteúdo e melhorar a legibilidade, criando hierarquia visual na interface.</p>
        
        <div class="separator-showcase">
          <div class="separator-group">
            <h3 class="component-subtitle">Separador Simples com Elipses</h3>
            <SimpleSeparator />
            <p class="separator-description">Linha única para separação com elipses decorativas em ambos os lados</p>
          </div>
          
          <div class="separator-group">
            <h3 class="component-subtitle">Separador Composto</h3>
            <DoubleSeparator />
            <p class="separator-description">Separador com elementos decorativos de setas e símbolo de infinito</p>
          </div>
          
          <div class="separator-group">
            <h3 class="component-subtitle">Separador com Seta</h3>
            <ArrowSeparator />
            <p class="separator-description">Linha simples com seta direcional à direita, ideal para indicar continuidade</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="design-system-section">
      <h2 class="section-title">Selects</h2>
      <div class="design-system-content">
        <p class="component-description">Os componentes Select permitem que os usuários escolham uma opção de uma lista de itens.</p>
        
        <div class="select-showcase">
          <h3 class="component-subtitle">Select Básico</h3>
          <div class="select-demo">
            <Select v-model="selectedFruit" class="">
              <SelectTrigger class="!p-[18px]">
                <SelectValue placeholder="Order by" />
              </SelectTrigger>
              <SelectContent class="bg-[#131616] border border-[#444] rounded-md shadow-lg !p-2">
                <SelectGroup>
                  <SelectItem class="text-white hover:bg-[#444] rounded !py-2 cursor-pointer" value="maisRelevantes">Mais relevantes</SelectItem>
                  <SelectItem class="text-white hover:bg-[#444] rounded !py-2 cursor-pointer" value="menosRelevantes">Menos relevantes</SelectItem>
                  <SelectItem class="text-white hover:bg-[#444] rounded !py-2 cursor-pointer" value="menorPreco">Menor preço</SelectItem>
                  <SelectItem class="text-white hover:bg-[#444] rounded !py-2 cursor-pointer" value="maiorPreco">Maior preço</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <p class="mt-4 text-gray-300">Selecionado: {{ selectedFruit || 'Nenhum item selecionado' }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import PrimaryButton from '~/components/app/shared/buttons/PrimaryButton.vue';
import SecondaryButton from '~/components/app/shared/buttons/SecondaryButton.vue';
import SimpleSeparator from '~/components/app/shared/separators/Separator.vue';
import DoubleSeparator from '~/components/app/shared/separators/CompoundSeparator.vue';
import ArrowSeparator from '~/components/app/shared/separators/ArrowSeparator.vue';
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem,
  SelectTrigger, 
  SelectValue 
} from '~/components/ui/select';
import { ref } from 'vue';

// Estado para o select
const selectedFruit = ref('');

// Definir o layout para esta página
definePageMeta({
  layout: 'default'
});
</script>

<style scoped>
.design-system-page {
  max-width: 1000px;
  margin: 0 auto;
}

.design-system-title {
  font-size: 2.2rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
}

.design-system-section {
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  letter-spacing: 0.5px;
  text-shadow: 0 0 10px rgba(0, 220, 130, 0.3);
}

.component-subtitle {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 600;
}

.component-description {
  font-size: 0.875rem;
  color: #e0e0e0;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.component-variant {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: #e0e0e0;
  font-weight: 500;
}

.mt-5 {
  margin-top: 2.5rem;
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
  border-bottom: 1px solid #333;
  padding-bottom: 1rem;
}

.type-item h1, .type-item h2, .type-item h3 {
  color: #FFF7DF;
}

.type-item code {
  background: #333;
  color: var(--primary-color);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.875rem;
}

.body-text {
  font-size: 1rem;
  font-family: 'Felix Titling', serif;
  color: #FFF7DF;
}

.font-description {
  font-size: 0.75rem;
  color: #E3D4B7;
  font-style: italic;
  margin-top: 0.25rem;
  line-height: 1.4;
  max-width: 350px;
}

.small-text {
  font-size: 0.875rem;
  font-family: 'Calibri', sans-serif;
  color: #FFF7DF;
}

.button-text {
  font-size: 16px;
  font-family: 'Cormorant', serif;
  font-weight: 600;
  color: #FFF7DF;
}

/* Buttons */
.button-showcase {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.button-group {
  margin-bottom: 1rem;
  padding: 1.5rem;
  background-color: #0e0e0e;
  border-radius: 6px;
  border: 1px solid #2d2d2d;
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
  color: #c0c0c0;
  margin-top: 0.5rem;
  font-weight: 500;
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

/* Separadores */
.separator-showcase {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.separator-group {
  background-color: #0e0e0e;
  border-radius: 6px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.separator-description {
  font-size: 0.875rem;
  color: #c0c0c0;
  margin-top: 1rem;
  text-align: center;
  max-width: 400px;
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
  
  .design-system-section {
    padding: 1.5rem;
  }
  
  .design-system-title {
    font-size: 1.8rem;
  }
  
  .separator-group {
    padding: 1rem;
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
  
  .design-system-title {
    font-size: 1.5rem;
  }
}

.design-system-content {
  padding: 0.5rem;
}

.select-showcase {
  margin-top: 1.5rem;
}

.select-demo {
  background-color: #292929;
  padding: 1.5rem;
  border-radius: 6px;
  margin-top: 1rem;
}

.text-gray-300 {
  color: #ccc;
  margin-top: 1rem;
  font-size: 14px;
}
</style> 