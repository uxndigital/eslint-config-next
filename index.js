/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    'plugin:@next/next/recommended',
    'plugin:@next/next/core-web-vitals',
  ],
  globals: {
    React: true,
    JSX: true,
  },
  settings: { react: { version: 'detect' } },
};
