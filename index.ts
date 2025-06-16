import { FlatCompat } from '@eslint/eslintrc';
import reactConfig from '@uxndigital/eslint-config-react';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
});

const nextjsConfig = compat.config({
  extends: ['next'],
  rules: {
    'import/no-anonymous-default-export': 'off'
  }
});

export default [...nextjsConfig, ...reactConfig];
