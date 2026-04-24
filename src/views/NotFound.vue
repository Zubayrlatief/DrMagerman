<template>
  <section class="not-found">
    <div class="container">
      <div class="not-found-card">
        <p class="not-found-code">404</p>
        <h1>Page Not Found</h1>
        <p>
          The page you are looking for does not exist or may have moved.
          You can return to the homepage or contact the practice directly.
        </p>
        <div class="not-found-actions">
          <router-link to="/" class="btn btn-primary">Go to Home</router-link>
          <router-link to="/contact" class="btn btn-secondary">Contact Practice</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.not-found {
  padding: 4rem 0;
  background: var(--clinical-hero-bg);
  min-height: min(70vh, 640px);
  display: grid;
  align-items: center;
  border-bottom: 2px solid var(--neo-ink);
}

.not-found-card {
  max-width: 44rem;
  margin: 0 auto;
  background: var(--cb-paper);
  border: 2px solid var(--neo-ink);
  box-shadow: 6px 6px 0 0 var(--neo-ink);
  padding: 2.25rem 2rem;
  text-align: center;
}

.not-found-code {
  margin: 0 0 0.35rem;
  color: var(--cb-accent-deep);
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 0.85rem;
  letter-spacing: 0.16em;
}

.not-found-card h1 {
  font-size: clamp(1.7rem, 4.5vw, 2.5rem);
  margin-bottom: 0.75rem;
}

.not-found-card p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0 auto 1.5rem;
  max-width: 34rem;
}

.not-found-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .not-found {
    padding: 3rem 0;
    min-height: min(66vh, 560px);
  }

  .not-found-card {
    padding: 1.5rem 1.15rem;
  }

  .not-found-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .not-found-actions .btn {
    width: 100%;
  }
}
</style>
