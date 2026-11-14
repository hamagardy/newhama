# Hama Gardy portfolio

Requires Node.js 22.12 or newer.

```sh
npm ci
npm start
```

`npm run build` creates `build/` and verifies that private dashboard files and
credentials are absent. `npm run preview` previews the production site with
its security headers. `npm test` runs the security regression checks, and
`npm run security:audit` checks dependencies for known vulnerabilities.

## Local analytics

Run `npm run dashboard`, then open <http://127.0.0.1:4199>. The dashboard can
open a local Firebase JSON export or connect using authenticated Google
credentials. See [setup instructions](tools/local-dashboard/README.md).
The dashboard is separate from the public website and excluded from builds.

## Hosting and database protection

The repository includes Vercel and Netlify deployment configuration. The build
system uses Vite in place of Create React App; JSX files use the `.jsx` suffix.
The output directory remains `build/`.

Website changes take effect after deployment. Firebase database access rules
must be changed separately in the Firebase project. Follow the
[security instructions](security/README.md) to close the existing public
analytics access without replacing unrelated application rules.
