import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@main': resolve('src/main/src'),
        '@shared': resolve('src/shared'),
        '@lib': resolve('src/main/lib')
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    // assetsInclude: 'src/renderer/src/assets/**', //希望 Vite 处理 src/renderer/src/assets 目录下的所有文件
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@shared': resolve('src/shared'),
        '@/hooks': resolve('src/renderer/src/hooks'),
        '@assets': resolve('src/renderer/src/assets'),
        '@/store': resolve('src/renderer/src/store'),
        '@/components': resolve('src/renderer/src/comporents'),
        '@/mocks': resolve('src/renderer/src/mocks')
      }
    },
    plugins: [react()]
  }
})
