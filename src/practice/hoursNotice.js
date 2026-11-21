/** Communication outage — set `enabled: false` once phone/email are restored. */
export const COMMUNICATION_OUTAGE = {
  enabled: false,
  walkInHours: '09:00 – 12:30 and 15:00 – 17:30'
}

/**
 * Temporary closure. The notice shows from now until `end` and hides itself
 * on the reopening day, so nothing needs switching off afterwards.
 * `start` = first full day closed, `end` = last day closed (YYYY-MM-DD).
 */
export const TEMPORARY_CLOSURE = {
  enabled: true,
  title: 'Festive season closure',
  theme: 'festive', // Christmas styling; remove for a plain notice
  start: '2026-12-19',
  end: '2027-01-05',
  closesOn: 'Friday, 18 December 2026',
  reopensOn: 'Wednesday, 6 January 2027'
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
