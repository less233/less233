import { DefineComponent } from 'vue'
declare module '*.vue' {
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare global {
  interface Window {
    $message: any
  }
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
