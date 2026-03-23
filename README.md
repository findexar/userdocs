# Agentsyx Help (A6 user docs)

Next.js + [Nextra](https://nextra.site/) documentation for **end users** of Agentsyx-powered assistants.

## Development

```bash
npm install
npm run dev
```

Runs at [http://localhost:3010](http://localhost:3010).

## Production

- **Hostname:** `https://docsa6.agentsyx.com`
- Deploy on Vercel: import this repo, use the repository root as the project root, production branch `main`.
- In Vercel **Domains**, add `docsa6.agentsyx.com` and configure DNS (CNAME to Vercel) as shown in the dashboard.

Creator / integration docs remain at [docs.agentsyx.com](https://docs.agentsyx.com).

## Related

The Agentsyx app links here via `NEXT_PUBLIC_HELP_BASE_URL` (see `saas-starter`).
