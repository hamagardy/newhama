import React from 'react';
import './StoreBadges.css';

/**
 * Local, inline SVG store badges.
 *
 * These replace two hotlinked images that used to be fetched from
 * upload.wikimedia.org (which now answers 400 — the badge was showing up
 * broken) and from an unrelated third-party site. Inlining them removes two
 * cross-origin requests from the critical path and makes the badges render
 * instantly and sharply at any size.
 */

export function AppStoreBadge({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 54"
      role="img"
      aria-label="Download on the App Store"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="159" height="53" rx="9.5" fill="#000" />
      <rect x="0.5" y="0.5" width="159" height="53" rx="9.5" fill="none" stroke="#A6A6A6" />
      <g transform="translate(14 13) scale(1.15)" fill="#fff">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
      </g>
      <text
        x="48"
        y="21"
        fill="#fff"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
        fontSize="9.5"
      >
        Download on the
      </text>
      <text
        x="47"
        y="39"
        fill="#fff"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
        fontSize="19"
        fontWeight="500"
      >
        App Store
      </text>
    </svg>
  );
}

export function GooglePlayBadge({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 54"
      role="img"
      aria-label="Get it on Google Play"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="159" height="53" rx="9.5" fill="#000" />
      <rect x="0.5" y="0.5" width="159" height="53" rx="9.5" fill="none" stroke="#A6A6A6" />
      {/* Play triangle: four folded faces */}
      <g transform="translate(13 14) scale(1.08)">
        <path d="M3.5 2.2 13.6 12 3.5 21.8Z" fill="#00A0FF" />
        <path d="M3.5 2.2 17.0 8.0 13.6 12Z" fill="#00DE6D" />
        <path d="M3.5 21.8 13.6 12 17.0 16.0Z" fill="#FF3A44" />
        <path d="M13.6 12 17.0 8.0 20.6 12 17.0 16.0Z" fill="#FFCE00" />
      </g>
      <text
        x="48"
        y="21"
        fill="#fff"
        fontFamily="Roboto, 'Helvetica Neue', Arial, sans-serif"
        fontSize="9"
        letterSpacing="0.8"
      >
        GET IT ON
      </text>
      <text
        x="47"
        y="39"
        fill="#fff"
        fontFamily="Roboto, 'Helvetica Neue', Arial, sans-serif"
        fontSize="18"
        fontWeight="500"
      >
        Google Play
      </text>
    </svg>
  );
}
