/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>
  export default component
}

// eslint-disable-next-line
interface ImportMetaEnv {
  VITE_BASE_URL: string
}
