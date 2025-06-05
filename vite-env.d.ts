/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_ACCESS_TOKEN_GITHUB: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}