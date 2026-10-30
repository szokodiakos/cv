import type { YearMonth } from "../data/cv"

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

const parse = (ym: YearMonth) => {
  const [year, month] = ym.split("-").map(Number)
  return { year, month: MONTHS[month - 1] }
}

export const startYear = (ym: YearMonth) => parse(ym).year

export const formatRange = (start: YearMonth, end?: YearMonth) => {
  const s = parse(start)
  if (!end) return `${s.month} ${s.year} – present`
  const e = parse(end)
  if (s.year === e.year) return `${s.month}–${e.month} ${s.year}`
  return `${s.month} ${s.year} – ${e.month} ${e.year}`
}

export const formatYears = (start: YearMonth, end?: YearMonth) => {
  const s = startYear(start)
  if (!end) return `${s}–now`
  const e = startYear(end)
  return s === e ? `${s}` : `${s}–${e}`
}

// Joins a path onto the configured base, so links work under /cv on GitHub Pages.
export const withBase = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`
