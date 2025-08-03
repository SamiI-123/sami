import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // This replaces `process.env.API_KEY` in the code with the 
    // actual environment variable at build time.
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
})
