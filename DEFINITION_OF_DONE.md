# Definition of Done Checklist

Deze checklist moet worden doorlopen voordat een web applicatie live gaat. Claude Code kan deze items systematisch controleren.

## SEO & Discoverability

### robots.txt en sitemap.xml
**Check:** Bestaan `public/robots.txt` en `public/sitemap.xml`?
- [ ] `robots.txt` aanwezig en correct geconfigureerd
- [ ] `sitemap.xml` aanwezig met alle belangrijke routes
- [ ] Sitemap URL toegevoegd aan `robots.txt`

**Actie voor Claude Code:**
```bash
# Controleer of bestanden bestaan
ls -la public/robots.txt public/sitemap.xml
# Review inhoud
cat public/robots.txt
cat public/sitemap.xml
```

### SEO Optimization
**Check:** Zijn alle pagina's geoptimaliseerd voor zoekmachines?
- [ ] Elke route heeft unieke `<title>` tag
- [ ] Elke route heeft unieke meta description
- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] Alt teksten op alle images
- [ ] Canonical URLs ingesteld waar nodig

**Actie voor Claude Code:**
```bash
# Zoek naar pagina componenten en controleer meta tags
grep -r "document.title\|<title>\|<meta name=\"description\"" src/
# Controleer of er images zonder alt zijn
grep -r "<img" src/ | grep -v "alt="
```

### Social Media Preview Tags (Open Graph, Twitter Cards)
**Check:** Zijn social media preview tags aanwezig in de HTML head?
- [ ] `og:title`, `og:description`, `og:image`, `og:url` aanwezig
- [ ] `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` aanwezig
- [ ] Preview image (1200x630px) aanwezig in `public/`

**Actie voor Claude Code:**
```bash
# Controleer meta tags in index.html of root layout
grep -r "og:\|twitter:" public/index.html src/
# Zoek preview image
find public/ -name "*og-image*" -o -name "*preview*" -o -name "*social*"
```

### Aanmelden Google Search Index
**Check:** Is de website aangemeld bij Google Search Console?
- [ ] Eigendom geverifieerd via meta tag of DNS
- [ ] Sitemap ingediend
- [ ] Geen kritieke indexeringsproblemen

**Actie voor Claude Code:**
⚠️ **HANDMATIGE VERIFICATIE VEREIST**
```
Vraag gebruiker: "Is de website aangemeld bij Google Search Console en is de sitemap ingediend?"
[Gebruiker moet bevestigen: ja/nee]
```

## Content & Features

### LLM Ondersteuning
**Check:** Is de website geoptimaliseerd voor LLM's?
- [ ] Semantische HTML gebruikt
- [ ] Structured data (JSON-LD) waar relevant
- [ ] Duidelijke heading structuur
- [ ] Alt teksten op images voor context

**Actie voor Claude Code:**
```bash
# Controleer op JSON-LD structured data
grep -r "application/ld+json" src/ public/
# Controleer semantische HTML tags
grep -rE "<article>|<section>|<nav>|<aside>|<header>|<footer>" src/
```

### Blog
**Check:** Als blog aanwezig, is deze functioneel?
- [ ] Blog posts laden correct
- [ ] Markdown/content parsing werkt
- [ ] RSS feed aanwezig (optioneel maar aanbevolen)
- [ ] Blog posts hebben correcte meta tags

**Actie voor Claude Code:**
```bash
# Zoek naar blog gerelateerde bestanden
find src/ -type f -name "*blog*" -o -name "*post*" -o -name "*article*"
# Controleer RSS feed
ls -la public/rss.xml public/feed.xml
```

### Contact Formulier
**Check:** Is er een werkend contactformulier?
- [ ] Formulier rendert correct
- [ ] Validatie werkt (client-side)
- [ ] Backend endpoint werkt
- [ ] Email verzending geconfigureerd
- [ ] Spam bescherming (honeypot of captcha)
- [ ] Success/error states geïmplementeerd

**Actie voor Claude Code:**
```bash
# Zoek contact formulier component
find src/ -type f -name "*contact*" -o -name "*form*"
grep -r "onSubmit\|handleSubmit" src/components/*contact* src/components/*form* 2>/dev/null
```

⚠️ **HANDMATIGE VERIFICATIE VEREIST**
```
Vraag gebruiker: "Is het contactformulier getest en werkt email verzending?"
[Gebruiker moet bevestigen: ja/nee]
```

### Legal Pages
**Check:** Zijn alle wettelijk verplichte pagina's aanwezig?
- [ ] Privacy Policy
- [ ] Terms of Service (indien van toepassing)
- [ ] Cookie Policy (als cookie banner aanwezig)
- [ ] Disclaimer (indien nodig)

**Actie voor Claude Code:**
```bash
# Zoek naar legal pages
find src/ -type f -name "*privacy*" -o -name "*terms*" -o -name "*legal*" -o -name "*cookie*"
# Controleer routes
grep -r "privacy\|terms\|legal\|cookies" src/routes/ src/App.tsx src/router* 2>/dev/null
```

### 404 Pagina
**Check:** Is er een custom 404 pagina?
- [ ] 404 component bestaat
- [ ] Route voor catch-all (*) geconfigureerd
- [ ] Nuttige links terug naar site (home, sitemap)

**Actie voor Claude Code:**
```bash
# Zoek 404 component
find src/ -type f -name "*404*" -o -name "*NotFound*" -o -name "*not-found*"
# Controleer catch-all route in react-router
grep -r "path=\"\*\"" src/
```

### Geen Dummy Teksten Meer
**Check:** Zijn alle placeholder/lorem ipsum teksten vervangen?
- [ ] Geen "Lorem ipsum" in codebase
- [ ] Geen TODO comments voor content
- [ ] Geen placeholder images meer

**Actie voor Claude Code:**
```bash
# Zoek naar lorem ipsum
grep -ri "lorem ipsum\|dolor sit amet" src/ public/
# Zoek naar placeholder teksten
grep -ri "placeholder\|TODO.*content\|FIXME.*text\|dummy text" src/
# Zoek placeholder images
grep -ri "placeholder\.\(jpg\|png\|svg\)\|via\.placeholder\|placehold\.it" src/
```

## Privacy & Analytics

### Cookie Banner
**Check:** Is de cookie banner correct geïmplementeerd?
- [ ] Cookie banner toont bij eerste bezoek
- [ ] Gebruiker kan accepteren/weigeren
- [ ] Keuze wordt opgeslagen
- [ ] Analytics laden pas na consent
- [ ] Link naar cookie policy

**Actie voor Claude Code:**
```bash
# Zoek cookie banner component
find src/ -type f -name "*cookie*" -o -name "*consent*" -o -name "*banner*"
# Controleer localStorage/cookie usage
grep -r "localStorage\|document.cookie" src/components/*cookie* src/components/*consent* 2>/dev/null
```

### Posthog Analytics
**Check:** Is Posthog correct geconfigureerd?
- [ ] Posthog library geïnstalleerd
- [ ] API key in environment variables
- [ ] Initialisatie in app entry point
- [ ] Alleen laden na cookie consent
- [ ] Geen PII wordt getracked

**Actie voor Claude Code:**
```bash
# Controleer Posthog in dependencies
grep "posthog" package.json
# Zoek naar initialisatie
grep -r "posthog.init\|PostHogProvider" src/
# Controleer environment variable
grep "POSTHOG" .env.example .env.local 2>/dev/null
```

⚠️ **HANDMATIGE VERIFICATIE VEREIST**
```
Vraag gebruiker: "Is Posthog API key ingesteld in productie environment variables?"
[Gebruiker moet bevestigen: ja/nee]
```

## Design & UX

### Favicon en App Icons
**Check:** Zijn alle iconen aanwezig?
- [ ] favicon.ico (32x32)
- [ ] apple-touch-icon.png (180x180)
- [ ] icon-192.png en icon-512.png voor PWA
- [ ] manifest.json met icon references

**Actie voor Claude Code:**
```bash
# Controleer iconen in public folder
ls -la public/favicon.ico public/apple-touch-icon.png public/icon-*.png
# Controleer manifest
cat public/manifest.json 2>/dev/null || cat public/site.webmanifest 2>/dev/null
# Controleer references in HTML
grep -r "icon\|manifest" public/index.html src/index.html 2>/dev/null
```

### Mobile Responsiveness Getest
**Check:** Werkt de site op mobiele apparaten?
- [ ] Viewport meta tag aanwezig
- [ ] Touch targets minimaal 44x44px
- [ ] Geen horizontale scroll
- [ ] Tekst leesbaar zonder zoomen
- [ ] Getest op verschillende schermformaten

**Actie voor Claude Code:**
```bash
# Controleer viewport meta tag
grep -r "viewport" public/index.html src/index.html 2>/dev/null
# Controleer responsive CSS (Tailwind/CSS modules)
grep -rE "sm:|md:|lg:|xl:|@media" src/ | head -20
```

⚠️ **HANDMATIGE VERIFICATIE VEREIST**
```
Vraag gebruiker: "Is de website getest op mobiele apparaten (phone, tablet) en werkt alles correct?"
[Gebruiker moet bevestigen: ja/nee]
```

## Security

### SQL Injection Preventie Gevalideerd
**Check:** Als Postgres wordt gebruikt, zijn queries veilig?
- [ ] Parameterized queries/prepared statements gebruikt
- [ ] ORM (Prisma, Drizzle, TypeORM) gebruikt correct
- [ ] Geen string concatenatie in queries
- [ ] Input validatie aanwezig

**Actie voor Claude Code:**
```bash
# Zoek database query bestanden
find src/ -type f -name "*query*" -o -name "*database*" -o -name "*db*" | grep -E "\.(ts|tsx)$"
# Check voor onveilige patterns
grep -r "SELECT.*+\|INSERT.*+\|UPDATE.*+" src/ --include="*.ts" --include="*.tsx"
# Controleer voor ORM usage
grep "prisma\|drizzle\|typeorm" package.json
# Zoek Prisma schema
ls -la prisma/schema.prisma 2>/dev/null
```

### Secrets Niet in Git History
**Check:** Staan er geen secrets in git?
- [ ] `.env` in `.gitignore`
- [ ] `.env.example` aanwezig zonder echte waarden
- [ ] Geen API keys in code
- [ ] Git history gescand

**Actie voor Claude Code:**
```bash
# Controleer .gitignore
grep -E "^\.env$|^\.env\.local$" .gitignore
# Controleer of .env.example bestaat
ls -la .env.example
# Zoek naar mogelijke secrets in tracked files
git ls-files | xargs grep -i "api_key\|secret\|password\|token" | grep -v ".env.example" | head -10
# Check git history voor leaked secrets (laatste 10 commits)
git log --all --full-history -S "api_key\|secret\|password" --oneline | head -10
```

### npm audit
**Check:** Zijn er bekende kwetsbaarheden in dependencies?
- [ ] `npm audit` geen critical/high vulnerabilities
- [ ] Dependencies up-to-date
- [ ] Deprecated packages vervangen

**Actie voor Claude Code:**
```bash
# Run npm audit
npm audit --production
# Check voor outdated packages
npm outdated
```

## DevOps & Deployment

### Environment Variables Goed Ingesteld op Deployment Omgeving
**Check:** Zijn alle env vars correct geconfigureerd?
- [ ] `.env.example` volledig en up-to-date
- [ ] Alle vars gedocumenteerd
- [ ] Productie vars ingesteld op hosting platform
- [ ] Geen default secrets in `.env.example`

**Actie voor Claude Code:**
```bash
# Controleer .env.example
cat .env.example
# Zoek env var usage in code
grep -r "process.env\|import.meta.env" src/ --include="*.ts" --include="*.tsx" | cut -d: -f2 | sort -u | head -20
```

⚠️ **HANDMATIGE VERIFICATIE VEREIST**
```
Vraag gebruiker: "Zijn alle environment variables ingesteld op de productie deployment omgeving?"
[Gebruiker moet bevestigen: ja/nee]
```

### Koppeling Domeinnaam
**Check:** Is het custom domein correct gekoppeld?
- [ ] DNS records geconfigureerd (A/CNAME)
- [ ] SSL certificaat actief
- [ ] www → non-www redirect (of omgekeerd)
- [ ] HTTP → HTTPS redirect

**Actie voor Claude Code:**
⚠️ **HANDMATIGE VERIFICATIE VEREIST**
```
Vraag gebruiker: 
"1. Is het custom domein gekoppeld en bereikbaar?"
"2. Werkt HTTPS correct met geldig certificaat?"
"3. Werken redirects (www/non-www en http→https)?"
[Gebruiker moet bevestigen: ja/nee voor elk punt]
```

### GitHub Actions Pipeline
**Check:** Is CI/CD pipeline actief en compleet?
- [ ] `.github/workflows/` bestaat
- [ ] Pipeline bevat: Biome check
- [ ] Pipeline bevat: Prettier check
- [ ] Pipeline bevat: ESLint
- [ ] Pipeline bevat: Type checking (tsc)
- [ ] Pipeline draait op pull requests
- [ ] Pipeline status badge in README (optioneel)

**Actie voor Claude Code:**
```bash
# Controleer workflows
ls -la .github/workflows/
# Review workflow contents
cat .github/workflows/*.yml 2>/dev/null
# Controleer voor Biome
grep -r "biome" .github/workflows/ package.json
# Controleer voor Prettier
grep -r "prettier" .github/workflows/ package.json
# Controleer voor linting
grep -r "lint\|eslint" .github/workflows/ package.json
# Controleer voor type checking
grep -r "tsc\|type-check" .github/workflows/ package.json
```

---

## Automated Check Script

Run dit script om alle automatische checks uit te voeren:

```bash
#!/bin/bash

echo "🚀 Running Definition of Done checks..."
echo ""

# Function to check if command succeeded
check_result() {
    if [ $? -eq 0 ]; then
        echo "✅ $1"
    else
        echo "❌ $1"
    fi
}

# SEO & Discoverability
echo "📊 SEO & Discoverability"
test -f public/robots.txt && check_result "robots.txt exists" || echo "❌ robots.txt missing"
test -f public/sitemap.xml && check_result "sitemap.xml exists" || echo "❌ sitemap.xml missing"
grep -q "og:" public/index.html src/index.html 2>/dev/null && check_result "Open Graph tags found" || echo "⚠️  Open Graph tags not found"

# Content & Features
echo ""
echo "📝 Content & Features"
test -f src/pages/404.tsx -o -f src/pages/NotFound.tsx -o -f src/routes/404.tsx 2>/dev/null && check_result "404 page exists" || echo "⚠️  404 page not found"
grep -riq "lorem ipsum" src/ public/ && echo "❌ Lorem ipsum found" || check_result "No dummy text"

# Privacy & Analytics
echo ""
echo "🔒 Privacy & Analytics"
grep -q "posthog" package.json && check_result "Posthog in dependencies" || echo "⚠️  Posthog not in dependencies"

# Design & UX
echo ""
echo "🎨 Design & UX"
test -f public/favicon.ico && check_result "favicon.ico exists" || echo "❌ favicon.ico missing"
test -f public/apple-touch-icon.png && check_result "apple-touch-icon.png exists" || echo "⚠️  apple-touch-icon.png missing"
grep -q "viewport" public/index.html 2>/dev/null && check_result "Viewport meta tag found" || echo "❌ Viewport meta tag missing"

# Security
echo ""
echo "🛡️  Security"
grep -q "^\.env$" .gitignore && check_result ".env in .gitignore" || echo "❌ .env not in .gitignore"
test -f .env.example && check_result ".env.example exists" || echo "❌ .env.example missing"
npm audit --production --audit-level=high 2>&1 | grep -q "found 0 vulnerabilities" && check_result "No high/critical npm vulnerabilities" || echo "⚠️  npm vulnerabilities found"

# DevOps
echo ""
echo "⚙️  DevOps"
test -d .github/workflows && check_result "GitHub Actions configured" || echo "⚠️  No GitHub Actions found"
grep -q "biome\|prettier\|lint" .github/workflows/*.yml 2>/dev/null && check_result "Linting in CI" || echo "⚠️  Linting not found in CI"

echo ""
echo "✨ Automated checks complete!"
echo "⚠️  Don't forget manual verifications (see checklist above)"
```

Sla dit op als `check-dod.sh` en run met:
```bash
chmod +x check-dod.sh
./check-dod.sh
```

---

## Manual Verification Required

De volgende items **moeten handmatig worden geverifieerd** door de gebruiker:

1. ✋ Google Search Console aanmelding en sitemap indiening
2. ✋ Contactformulier email verzending getest
3. ✋ Posthog API key in productie environment
4. ✋ Mobile responsiveness op echte apparaten getest
5. ✋ Environment variables op deployment platform ingesteld
6. ✋ Custom domein bereikbaar met HTTPS en redirects werkend

---

## Usage voor Claude Code

Als Claude Code deze checklist doorloopt:

1. **Start met automated checks**: Run het bash script eerst
2. **Review elk item**: Ga systematisch door elke sectie
3. **Vraag bevestiging**: Voor items die handmatige verificatie vereisen, vraag expliciet aan de gebruiker
4. **Rapporteer resultaten**: Geef duidelijk overzicht van wat werkt en wat aandacht nodig heeft
5. **Suggereer fixes**: Voor ontbrekende items, bied aan om ze toe te voegen/te fixen

**Template voor Claude Code rapportage:**
```
Definition of Done Check - [Project Name]
Datum: [Date]

✅ PASSED: [aantal] items
⚠️  NEEDS ATTENTION: [aantal] items  
❌ FAILED: [aantal] items
✋ MANUAL VERIFICATION: [aantal] items

Details:
[Gedetailleerde lijst per categorie]

Aanbevolen acties:
1. [Fix item X]
2. [Add item Y]
3. [Verify item Z with user]
```
