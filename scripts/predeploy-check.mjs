import fs from 'node:fs'
import path from 'node:path'

const projectRoot = process.cwd()
const srcDir = path.join(projectRoot, 'src')
const routerFile = path.join(srcDir, 'router', 'index.js')
const sitemapFile = path.join(projectRoot, 'public', 'sitemap.xml')

function readText(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required file: ${filePath}`)
  }
  return fs.readFileSync(filePath, 'utf8')
}

function walkFiles(dir, extensions, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkFiles(fullPath, extensions, files)
      continue
    }
    if (extensions.includes(path.extname(entry.name))) files.push(fullPath)
  }
  return files
}

function getSiteUrl() {
  const envPath = path.join(projectRoot, '.env')
  const envLocalPath = path.join(projectRoot, '.env.local')
  const examplePath = path.join(projectRoot, '.env.example')
  const envCandidates = [envLocalPath, envPath, examplePath]
  for (const envFile of envCandidates) {
    if (!fs.existsSync(envFile)) continue
    const content = fs.readFileSync(envFile, 'utf8')
    const match = content.match(/^VITE_SITE_URL=(.+)$/m)
    if (match && match[1].trim()) return match[1].trim().replace(/\/$/, '')
  }
  return 'https://www.drmagerman.co.za'
}

function parseRouterInfo(routerSource) {
  const componentMap = new Map()
  for (const match of routerSource.matchAll(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*import\('([^']+)'\)/g)) {
    componentMap.set(match[1], path.join(srcDir, match[2].replace('../', '')))
  }

  const routes = []
  for (const match of routerSource.matchAll(/path:\s*'([^']+)'\s*,[\s\S]*?component:\s*(\w+)[\s\S]*?(meta:\s*\{[\s\S]*?\}\s*)?\}/g)) {
    const routePath = match[1]
    const componentName = match[2]
    const block = match[0]
    routes.push({
      path: routePath,
      componentName,
      componentFile: componentMap.get(componentName),
      block,
      isCatchAll: routePath.includes(':pathMatch')
    })
  }

  return routes
}

function checkRouteMeta(routes) {
  const errors = []
  for (const route of routes) {
    if (route.isCatchAll) {
      if (!/robots:\s*'noindex,\s*follow'/.test(route.block)) {
        errors.push(`Catch-all route "${route.path}" must include robots: 'noindex, follow'`)
      }
      continue
    }

    if (!/meta:\s*\{[\s\S]*seo:\s*\{/.test(route.block)) {
      errors.push(`Route "${route.path}" is missing meta.seo`)
      continue
    }
    if (!/title:\s*'[^']+/.test(route.block)) errors.push(`Route "${route.path}" is missing seo.title`)
    if (!/description:\s*'[^']+/.test(route.block)) errors.push(`Route "${route.path}" is missing seo.description`)
    if (!/keywords:\s*`[^`]+`|keywords:\s*'[^']+'/.test(route.block)) {
      errors.push(`Route "${route.path}" is missing seo.keywords`)
    }
  }
  return errors
}

function checkInternalLinks(routes) {
  const errors = []
  const validPaths = new Set(routes.filter((r) => !r.isCatchAll).map((r) => r.path))
  const vueFiles = walkFiles(srcDir, ['.vue'])

  for (const file of vueFiles) {
    const content = fs.readFileSync(file, 'utf8')
    const linkRegex = /(to|href)=["'](\/[^"']*)["']/g
    for (const match of content.matchAll(linkRegex)) {
      const raw = match[2]
      const [pathPart, hashPart] = raw.split('#')
      const cleanPath = pathPart || '/'
      if (!validPaths.has(cleanPath)) {
        errors.push(`Broken internal link "${raw}" in ${path.relative(projectRoot, file)}`)
        continue
      }

      if (!hashPart) continue
      const route = routes.find((r) => r.path === cleanPath)
      if (!route?.componentFile || !fs.existsSync(route.componentFile)) continue
      const pageSource = fs.readFileSync(route.componentFile, 'utf8')
      const idRegex = new RegExp(`id=["']${hashPart}["']`)
      if (!idRegex.test(pageSource)) {
        errors.push(
          `Missing hash target "#${hashPart}" for link "${raw}" in ${path.relative(projectRoot, file)}`
        )
      }
    }
  }
  return errors
}

function checkSitemap(routes, siteUrl) {
  const errors = []
  const sitemap = readText(sitemapFile)
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim().replace(/\/$/, ''))
  const expectedLocs = routes
    .filter((r) => !r.isCatchAll)
    .map((r) => `${siteUrl}${r.path === '/' ? '' : r.path}`)
    .map((u) => u.replace(/\/$/, ''))

  for (const loc of expectedLocs) {
    if (!locs.includes(loc)) errors.push(`Sitemap missing route URL: ${loc}`)
  }
  for (const loc of locs) {
    if (!expectedLocs.includes(loc)) errors.push(`Sitemap has URL not in router: ${loc}`)
  }

  return errors
}

function main() {
  try {
    const routerSource = readText(routerFile)
    const routes = parseRouterInfo(routerSource)
    const siteUrl = getSiteUrl()

    const issues = [
      ...checkRouteMeta(routes),
      ...checkInternalLinks(routes),
      ...checkSitemap(routes, siteUrl)
    ]

    if (issues.length) {
      console.error('\nPre-deploy checks failed:\n')
      for (const issue of issues) console.error(`- ${issue}`)
      process.exit(1)
    }

    console.log('\nPre-deploy checks passed.')
    console.log(`- Routes checked: ${routes.length}`)
    console.log(`- Site URL used: ${siteUrl}`)
    console.log('- Verified: internal links, sitemap coverage, required route SEO meta\n')
  } catch (error) {
    console.error(`\nPre-deploy check crashed: ${error.message}\n`)
    process.exit(1)
  }
}

main()
