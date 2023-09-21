import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin(), dts({ include: ['src'] })],
  build: {
    cssCodeSplit: true,
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, './src/main.ts'),
      name: 'FueUI',
      formats: ['es'],
      fileName: (format) => `fue-ui.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
