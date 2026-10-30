// Renders the /print page of the built site to dist/akos-szokodi-cv.pdf.
// Uses the locally installed Google Chrome, so no browser download is needed.
import { preview } from "astro"
import { chromium } from "playwright-core"
import { fileURLToPath } from "node:url"

const root = fileURLToPath(new URL("..", import.meta.url))
const output = fileURLToPath(
  new URL("../dist/akos-szokodi-cv.pdf", import.meta.url),
)

const server = await preview({ root, logLevel: "warn" })
const browser = await chromium.launch({ channel: "chrome" })

try {
  const page = await browser.newPage()
  await page.goto(`http://localhost:${server.port}/cv/print/`, {
    waitUntil: "networkidle",
  })
  await page.evaluate(() => document.fonts.ready)
  await page.pdf({
    path: output,
    preferCSSPageSize: true,
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: "<span></span>",
    footerTemplate: `
      <div style="width: 100%; padding: 0 15mm; font-family: Georgia, serif; font-size: 7pt; color: #566079; display: flex; justify-content: space-between;">
        <span>Ákos Szokodi, CV</span>
        <span><span class="pageNumber"></span> of <span class="totalPages"></span></span>
      </div>`,
  })
  console.log(`PDF written to ${output}`)
} finally {
  await browser.close()
  await server.stop()
}
