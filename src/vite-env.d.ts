/// <reference types="vite/client" />

declare module '*.sol?raw' {
  const source: string
  export default source
}
