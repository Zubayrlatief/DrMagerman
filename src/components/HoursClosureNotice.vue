<template>
  <div
    v-if="visible"
    class="hours-closure-notice"
    :class="`hours-closure-notice--${variant}`"
    role="status"
    aria-live="polite"
  >
    <div class="hours-closure-notice__inner">
      <svg class="hours-closure-notice__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"/>
      </svg>
      <p>
        <strong>Temporary closure:</strong>
        <template v-if="active">
          The practice is closed from {{ closure.label }} and is not consulting during this period.
          Regular hours resume on {{ closure.resumeDate }}.
        </template>
        <template v-else>
          The practice will be temporarily closed from {{ closure.label }}.
          Regular consulting hours resume on {{ closure.resumeDate }}.
        </template>
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import {
  TEMPORARY_CLOSURE,
  isTemporaryClosureActive,
  shouldShowTemporaryClosureNotice
} from '../practice/hoursNotice'

defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'compact', 'banner'].includes(v)
  }
})

const closure = TEMPORARY_CLOSURE
const visible = computed(() => shouldShowTemporaryClosureNotice())
const active = computed(() => isTemporaryClosureActive())
</script>

<style scoped>
.hours-closure-notice {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 0.85rem 1rem;
  margin-bottom: 1.25rem;
  background: #fef3c7;
  border: 2px solid var(--neo-ink);
  box-shadow: 3px 3px 0 0 var(--neo-ink);
  color: var(--neo-ink);
}

.hours-closure-notice__inner {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  width: 100%;
}

.hours-closure-notice--banner {
  margin-bottom: 0;
  padding: 0.7rem 1.25rem;
  border: none;
  border-bottom: 2px solid var(--neo-ink);
  box-shadow: none;
  background: #fde68a;
}

.hours-closure-notice--banner .hours-closure-notice__inner {
  max-width: 1180px;
  margin: 0 auto;
  align-items: center;
}

.hours-closure-notice--banner p {
  font-size: 0.88rem;
  line-height: 1.45;
}

.hours-closure-notice--compact {
  margin-bottom: 0.85rem;
  padding: 0.7rem 0.85rem;
  font-size: 0.82rem;
}

.hours-closure-notice--compact .hours-closure-notice__inner {
  align-items: flex-start;
}

.hours-closure-notice__icon {
  flex-shrink: 0;
  margin-top: 0.1rem;
  color: #b45309;
}

.hours-closure-notice--banner .hours-closure-notice__icon {
  margin-top: 0;
}

.hours-closure-notice p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--neo-ink);
}

.hours-closure-notice--compact p {
  font-size: 0.82rem;
  line-height: 1.5;
}

.hours-closure-notice strong {
  font-weight: 700;
}

@media (max-width: 640px) {
  .hours-closure-notice--banner {
    padding: 0.65rem 1rem;
  }

  .hours-closure-notice--banner p {
    font-size: 0.82rem;
  }
}
</style>
