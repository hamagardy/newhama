# Security configuration

## What is enforced in the website

- No Firebase dashboard, browser SDK, analytics database URL, or database
  connection in the production build. `scripts/check-build.mjs` verifies this.
- No source maps in the production output.
- An enforced Content Security Policy with no inline JavaScript, no `eval`,
  explicit external service origins, no plugins, and no framing by other sites.
  Inline styles remain allowed because the React components and Font Awesome
  use them. Fonts, analytics, Snapchat embeds, and Formspree remain enabled.
- MIME sniffing protection, referrer restrictions, permissions restrictions,
  and HTTPS transport policy in the hosting configuration.
- Vite dev and preview servers bind to loopback. The standalone dashboard has
  exact Host checks, same-origin checks, no CORS, no caching, no write API,
  and an API request header to prevent other websites reading local analytics.
- Old dashboard URLs serve a removed-page response. The server tools and
  credentials are excluded from deployment uploads and public build output.

After editing `security/headers.mjs`, run `node scripts/configure-hosting.mjs`
to regenerate `vercel.json` and `netlify.toml`. Vercel applies the policy to
the main site and preview domains, preserving the shop's separate policy.
Netlify scopes headers to portfolio page paths; review the shop separately
before hosting both applications on the same Netlify project.

## Required Firebase console change

The repository does not contain the currently deployed database rules or
credentials authorized to change them. Website changes do not change those
rules. In [Firebase console](https://console.firebase.google.com/project/xallakanm/database),
back up the current Realtime Database rules, then merge the **analytics node**
from `firebase-analytics.rules.example.json` into the existing `rules` object.
Keep unrelated app rules intact. The example is a fragment, not a complete
database rules file and must not be deployed as one.

Important: Firebase rules are inherited. A parent/root `".read": true` or
`".write": true` still grants access even if analytics has `false`. Remove
any such parent grants and explicitly grant access only to the other paths
that your apps need. Test this in the Rules Playground before publishing.
Do not set `auth != null` for analytics read access: anonymous Firebase users
are also authenticated. The local dashboard uses an authorized Google/IAM
identity instead of browser access rules.

Blocking client writes intentionally retires the old direct-to-Firebase
analytics ingestion. This repository no longer has a public analytics writer.
If another app uses this analytics node, move ingestion to a validated,
rate-limited backend before re-enabling it; do not restore public writes.

Verify unauthenticated reads of `analytics`, `analytics/visitors`, and
`analytics/downloads` are denied and simulated unauthenticated writes fail.
Use the Rules Playground for write checks; do not modify live visitor data.

## Validation and deployment

```sh
npm ci
npm test
npm run build
npm run security:audit
npm run preview
```

Deploy the reviewed changes through the existing Vercel/Netlify project, then
verify `/data.html` contains no dashboard, security headers are present on the
portfolio and privacy pages, and contact/Snapchat features still work. Older
deployment URLs and source repositories may still contain historical copies;
restrict old deployments if needed. Firebase rules protect the data even when
an old dashboard copy remains accessible.

The contact form is handled by Formspree. Browser validation is not a spam
control; review Formspree's server-side spam protection and allowed domains in
the form account. No account configuration is stored in this repository.

References: [Firebase Security Rules](https://firebase.google.com/docs/database/security),
[Vercel headers](https://vercel.com/docs/project-configuration/vercel-json#headers),
[Vite production builds](https://vite.dev/guide/build).
