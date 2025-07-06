import tailwindcss from "@tailwindcss/vite";
import type { NuxtPage } from 'nuxt/schema'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:8080",
          changeOrigin: true,
        },
      },
    },
  },
  modules: ['nuxt-viewport', 'dayjs-nuxt'],
  runtimeConfig: {
    public: {
      apiBase:
        process.env.NODE_ENV === "development"
        ? "http://localhost:8080"
        : "https://app.poneres.com",
    },
  },
})