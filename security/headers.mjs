export const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' https://www.googletagmanager.com https://static.woopra.com https://www.snapchat.com",
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.cdnfonts.com",
  "font-src 'self' data: https://fonts.gstatic.com https://fonts.cdnfonts.com",
  "img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com https://*.woopra.com https://*.snapchat.com",
  "media-src 'self' https://hamagardy.github.io",
  "connect-src 'self' https://formspree.io https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://*.woopra.com https://www.snapchat.com",
  "frame-src https://www.snapchat.com",
  "object-src 'none'",
  "base-uri 'none'",
  "form-action 'self' https://formspree.io",
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ');

export const securityHeaders = {
  'Content-Security-Policy': contentSecurityPolicy,
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  'Strict-Transport-Security': 'max-age=63072000',
};
