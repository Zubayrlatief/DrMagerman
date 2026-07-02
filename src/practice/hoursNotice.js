/** Temporary closure — remove or set `enabled: false` after the period ends. */
export const TEMPORARY_CLOSURE = {
  enabled: true,
  start: '2026-07-16',
  end: '2026-07-27',
  label: '16–27 July 2026',
  resumeDate: '28 July 2026'
}

function toLocalDayString(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function isTemporaryClosureActive(date = new Date()) {
  if (!TEMPORARY_CLOSURE.enabled) return false
  const day = toLocalDayString(date)
  return day >= TEMPORARY_CLOSURE.start && day <= TEMPORARY_CLOSURE.end
}

export function isTemporaryClosureUpcoming(date = new Date()) {
  if (!TEMPORARY_CLOSURE.enabled) return false
  return toLocalDayString(date) < TEMPORARY_CLOSURE.start
}

export function shouldShowTemporaryClosureNotice(date = new Date()) {
  if (!TEMPORARY_CLOSURE.enabled) return false
  return toLocalDayString(date) <= TEMPORARY_CLOSURE.end
}
