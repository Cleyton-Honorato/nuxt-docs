<template>
  <div class="app-layout">
    <header class="header">
      <div class="container">
        <div class="header-content">
          <h1 class="logo">Nuxt Docs</h1>
          <nav class="nav">
            <NuxtLink to="/" class="nav-link">Início</NuxtLink>
            <NuxtLink to="/about" class="nav-link">Sobre</NuxtLink>
            <NuxtLink to="/design-system" class="nav-link">Sistema de Design</NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <main class="main">
      <div class="container">
        <slot />
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} Nuxt Docs</p>
        <p class="developer">
          Desenvolvido por 
          <a href="https://github.com/Cleyton-Honorato" target="_blank" class="developer-link">
            <span class="developer-name">Cleyton Honorato Lima</span>
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Lógica de configuração do layout pode ser colocada aqui
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  padding: 1rem 0;
  background-color: var(--primary-color);
  color: white;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.nav-link:hover {
  opacity: 0.8;
}

.main {
  flex: 1;
  padding: 2rem 0;
}

.footer {
  padding: 1.5rem 0;
  background-color: var(--secondary-color);
  color: white;
  text-align: center;
}

.developer {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.9;
}

.developer-name {
  font-weight: 600;
}

.developer-link {
  color: white;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.developer-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

/* Responsive styles */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .nav {
    width: 100%;
    justify-content: flex-start;
  }
}
</style> 