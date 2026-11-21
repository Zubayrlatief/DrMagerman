<template>
  <div
    v-if="visible"
    class="hours-closure-notice"
    :class="[`hours-closure-notice--${variant}`, { 'hours-closure-notice--festive': festive }]"
    role="status"
    aria-live="polite"
  >
    <div class="hours-closure-notice__inner">
      <svg
        v-if="festive"
        class="hours-closure-notice__icon hours-closure-notice__icon--tree"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect x="10.4" y="19.5" width="3.2" height="3.5" fill="#b45309"/>
        <path d="M12 4.6 7.4 10.4h2L5.4 15.4h2.4L3.8 20.2h16.4l-4-4.8h2.4l-4-5h2L12 4.6z" fill="currentColor"/>
        <path d="m12 .5.95 2 2 .95-2 .95-.95 2-.95-2-2-.95 2-.95.95-2z" fill="#fbbf24"/>
        <circle cx="10.6" cy="12.6" r="1.05" fill="#dc2626"/>
        <circle cx="13.9" cy="16.2" r="1.05" fill="#dc2626"/>
        <circle cx="8.9" cy="17.6" r="1.05" fill="#fbbf24"/>
      </svg>
      <svg v-else class="hours-closure-notice__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"/>
      </svg>
      <p v-if="outageActive">
        <strong>Communication system down:</strong>
        Our phone and email systems are currently unavailable.
        Walk-ins are welcome between {{ outage.walkInHours }}.
      </p>
      <p v-else>
        <strong>{{ closure.title }}</strong>
        {{ active ? closure.activeText : closure.upcomingText }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import {
  COMMUNICATION_OUTAGE,
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
const outage = COMMUNICATION_OUTAGE
const outageActive = computed(() => outage.enabled)
const visible = computed(() => outage.enabled || shouldShowTemporaryClosureNotice())
const active = computed(() => isTemporaryClosureActive())
const festive = computed(() => !outage.enabled && closure.theme === 'festive')
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

/* Festive theme — set `theme: 'festive'` on the closure in hoursNotice.js */
.hours-closure-notice--festive {
  position: relative;
  background: #f0fdf4;
  padding-top: calc(0.7rem + 5px);
}

.hours-closure-notice--festive::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 5px;
  background: repeating-linear-gradient(
    -45deg,
    #c81e1e 0 9px,
    #ffffff 9px 18px
  );
}

.hours-closure-notice--festive .hours-closure-notice__icon--tree {
  color: #166534;
  margin-top: -0.1rem;
}

.hours-closure-notice--festive strong {
  color: #14532d;
}

.hours-closure-notice--festive.hours-closure-notice--banner {
  padding-top: 0.7rem;
  padding-bottom: calc(0.7rem + 5px);
  background-color: #14532d;
  background-image:
    radial-gradient(circle at 14px 9px, rgba(255, 255, 255, 0.5) 1.3px, transparent 1.8px),
    radial-gradient(circle at 58px 27px, rgba(255, 255, 255, 0.32) 1px, transparent 1.5px),
    radial-gradient(circle at 96px 13px, rgba(255, 255, 255, 0.42) 1.6px, transparent 2.1px),
    radial-gradient(circle at 132px 33px, rgba(255, 255, 255, 0.3) 1.1px, transparent 1.6px),
    linear-gradient(180deg, #166534 0%, #14532d 100%);
  background-size: 160px 44px, 160px 44px, 160px 44px, 160px 44px, 100% 100%;
  animation: festive-snow 9s linear infinite;
}

.hours-closure-notice--festive.hours-closure-notice--banner::after {
  top: auto;
  bottom: 0;
}

.hours-closure-notice--festive.hours-closure-notice--banner p {
  color: #f7fee7;
  text-shadow: 0 1px 0 rgba(5, 46, 22, 0.55);
}

.hours-closure-notice--festive.hours-closure-notice--banner strong {
  color: #fde68a;
}

.hours-closure-notice--festive.hours-closure-notice--banner .hours-closure-notice__icon--tree {
  color: #f7fee7;
  margin-top: 0;
}

@keyframes festive-snow {
  from {
    background-position: 0 0, 0 0, 0 0, 0 0, 0 0;
  }
  to {
    background-position: 0 44px, 0 88px, 0 44px, 0 88px, 0 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hours-closure-notice--festive.hours-closure-notice--banner {
    animation: none;
  }
}

@media (max-width: 640px) {
  .hours-closure-notice--festive.hours-closure-notice--banner {
    padding-bottom: calc(0.65rem + 5px);
  }
}
</style>
