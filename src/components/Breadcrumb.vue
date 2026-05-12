<template>
  <nav v-if="crumbs.length > 1" class="breadcrumb" aria-label="Breadcrumb">
    <ol>
      <li v-for="(crumb, i) in crumbs" :key="crumb.path">
        <router-link v-if="i < crumbs.length - 1" :to="crumb.path">{{ crumb.name }}</router-link>
        <span v-else aria-current="page">{{ crumb.name }}</span>
        <span v-if="i < crumbs.length - 1" class="breadcrumb-sep" aria-hidden="true">/</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const routeNames = {
  '/': 'Home',
  '/about': 'Medical Services',
  '/contact': 'Contact & Book Appointment'
}

const crumbs = computed(() => {
  const path = route.path
  if (path === '/') return [{ name: 'Home', path: '/' }]

  const items = [{ name: 'Home', path: '/' }]
  items.push({ name: routeNames[path] || route.name, path })
  return items
})
</script>

<style scoped>
.breadcrumb {
  padding: 0.75rem 0 0;
  font-size: 0.8rem;
}

.breadcrumb ol {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}

.breadcrumb li {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.breadcrumb a {
  color: var(--cb-accent-deep);
  text-decoration: none;
  font-weight: 600;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.breadcrumb span[aria-current] {
  color: var(--slate-600);
  font-weight: 500;
}

.breadcrumb-sep {
  color: var(--slate-400, #94a3b8);
  font-weight: 400;
}
</style>
