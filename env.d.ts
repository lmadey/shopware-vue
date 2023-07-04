/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VUE_APP_ACCESS_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
