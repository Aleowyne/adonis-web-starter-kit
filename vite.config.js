import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { getDirname } from '@poppinss/utils'
import inertia from '@adonisjs/inertia/client'
import vue from '@vitejs/plugin-vue'
import adonisjs from '@adonisjs/vite/client'

export default defineConfig({
  plugins: [
    inertia({
      ssr: {
        enabled: false,
      },
    }),
    vue(),
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ['inertia/app/app.ts'],

      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ['resources/views/**/*.edge'],
    }),
  ],
  resolve: {
    alias: {
      '@/': `${resolve(getDirname(import.meta.url), 'inertia')}/`,
      '~/': `${resolve(getDirname(import.meta.url), '.')}/`,
    },
  },
})
