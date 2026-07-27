import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      // Scripts vanilla legados (pre-migracao), ainda em uso pelas paginas .html
      // que nao foram portadas nesta rodada — fora do escopo do lint do app Next.js.
      "*.js",
      "src/*.ts",
    ],
  },
];

export default eslintConfig;
