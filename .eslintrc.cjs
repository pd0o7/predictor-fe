module.exports = {
  root: true,

  env: {
    browser: true,
    es2020: true,
    jest: true,
  },

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },

  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "import",
  ],

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],

  settings: {
    react: {
      version: "detect",
    },

    // THIS FIXES THE ERRORS YOU SAW
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
  },

  rules: {
    // Fix import extension resolution for TS/TSX
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        js: "never",
        jsx: "never",
      },
    ],

    // Better import ordering
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
      },
    ],

    // React rules (Next.js does not need React in scope)
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },

  ignorePatterns: [
    ".next",
    "node_modules",
    "dist"
  ],

  // Allow test files to bypass import resolution issues
  overrides: [
    {
      files: ["**/*.test.tsx", "**/*.test.ts"],
      rules: {
        "import/no-unresolved": "off",
        "import/default": "off",
        "import/namespace": "off",
        "import/no-named-as-default": "off",
        "import/no-named-as-default-member": "off",
      },
    },
  ],
};
