// Next 16 uses ESLint flat config; consume eslint-config-next's native flat export.
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'public/**'],
  },
];

export default eslintConfig;
