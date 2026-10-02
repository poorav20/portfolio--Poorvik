# Poorvik B S | AI & ML Portfolio

A project portfolio for Poorvik B S, a final-year Computer Science Engineering student specializing in AI and Machine Learning. It highlights applied ML, NLP, fairness evaluation, workflow automation, and data engineering projects.

**Live site:** https://poorav20.github.io/portfolio--Poorvik/

## Built With

- React 19 and Vite
- Tailwind CSS 4 and custom responsive styles
- Framer Motion and Lucide icons

## Run Locally

Requires Node.js 20 or later.

```bash
npm ci
npm run dev
```

Run the project checks before publishing:

```bash
npm run lint
npm run build
```

## Deploy to GitHub Pages

The GitHub Actions workflow builds and deploys the site whenever changes are pushed to `master`. It runs lint and the production build before publishing `dist/`.

1. In the repository, open **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Push to `master`, or run **Deploy to GitHub Pages** from the Actions tab.

The Vite base path in `vite.config.js` is set to `/portfolio--Poorvik/` for this repository. Update it if the repository name changes.

## Project Highlights

- **Trade IQ:** Real-time analysis for 14+ markets, combining technical indicators, sentiment analysis, and n8n workflow automation.
- **XAI Explainability & Fairness Toolbox:** Model evaluation, bias checks, and fairness visualizations across demographic groups.
- **Distributed Log Analyzer:** Processes 1M+ logs and reduces pipeline runtime from 45 seconds to 9 seconds.
- **Smart Agriculture Monitoring:** IoT sensor monitoring with AWS S3 storage and a 28% improvement in alert accuracy.