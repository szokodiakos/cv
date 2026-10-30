// One rAF-throttled scroll loop drives the scroll-linked effects on the page.
// Elements expose progress to CSS as custom properties:
//   [data-track] --p: 0 to 1 while a tall section is pinned
//   [data-view]  --v: 0 to 1 as the element enters the viewport

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

const tracks = [...document.querySelectorAll<HTMLElement>("[data-track]")]
const views = [...document.querySelectorAll<HTMLElement>("[data-view]")]
const bar = document.querySelector<HTMLElement>("[data-bar]")
const hero = document.querySelector<HTMLElement>("[data-hero]")

const update = () => {
  const vh = window.innerHeight

  for (const track of tracks) {
    const rect = track.getBoundingClientRect()
    const progress = clamp01(-rect.top / Math.max(1, rect.height - vh))
    track.style.setProperty("--p", progress.toFixed(4))
  }

  for (const el of views) {
    const top = el.getBoundingClientRect().top
    el.style.setProperty("--v", clamp01((vh - top) / (vh * 0.5)).toFixed(4))
  }

  if (bar && hero) {
    bar.classList.toggle("is-visible", hero.getBoundingClientRect().bottom <= 0)
  }
}

let queued = false

const schedule = () => {
  if (queued) return
  queued = true
  requestAnimationFrame(() => {
    queued = false
    update()
  })
}

addEventListener("scroll", schedule, { passive: true })
addEventListener("resize", schedule)
update()
