/**
 * Pull a display “punch” from a verbatim outcome string.
 * Does not invent figures — only extracts a numeric fragment already in the text.
 * Prefers comma-grouped, M/K-suffixed, or %-tagged values over small trailing amounts.
 */
function punchScore(s: string): number {
  const digits = s.replace(/[^\d.]/g, "");
  const numeric = parseFloat(digits) || 0;
  let n = digits.replace(/\./g, "").length;
  if (/,/.test(s)) n += 14;
  if (/[Mm]/.test(s)) n += 20 + Math.log10(Math.max(numeric, 1)) * 4;
  else if (/[Kk]/.test(s)) n += 12 + Math.log10(Math.max(numeric, 1)) * 3;
  if (/%/.test(s) || /\+$/.test(s)) n += 6;
  if (/^\$/.test(s)) n += 5 + Math.log10(Math.max(numeric, 1)) * 2;
  return n;
}

export function outcomePunch(outcome: string): string | null {
  const re =
    /(\$?\d{1,3}(?:,\d{3})+(?:\.\d+)?%?\+?|\$?\d+(?:\.\d+)?[MmKk]\+?|\d+(?:\.\d+)?%|\d+\+)/g;
  const matches = [...outcome.matchAll(re)].map((m) => m[1]);
  if (!matches.length) return null;

  return matches.sort((a, b) => punchScore(b) - punchScore(a))[0] ?? null;
}

/** Metric strip: first `max` outcomes in source order; punch picks the display figure within each. */
export function outcomeMetrics(outcomes: string[], max = 3) {
  return outcomes.slice(0, max).map((label) => ({
    punch: outcomePunch(label),
    label,
  }));
}
