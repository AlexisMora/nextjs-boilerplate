module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'browser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  env: {
    browser: true,
    node: true,
    es6: true
  },

  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx']
      }
    }
  },

  plugins: ['@typescript-eslint'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:security/recommended',
    'plugin:react-hooks/recommended'
  ],

  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ]
  }
}
