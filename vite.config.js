import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteRsw } from 'vite-plugin-rsw'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  base: './',
  plugins: [
    ViteRsw(),
    eslintPlugin({
      include: [
        'src/**/*.js',
        'src/*.js',
        'src/**/*.jsx',
        'src/*.jsx',
        'vite.config.js',
        '.eslintrc.cjs'
      ]
    }),
    react()
  ]
})
