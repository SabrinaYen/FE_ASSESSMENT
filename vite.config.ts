import { fileURLToPath, URL } from 'node:url';
import { ConfigEnv, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig(({ mode }: ConfigEnv) => {
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 3000,
      open: true,
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    build: {
      target: 'es2015',
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      minify: 'terser',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue'],
          },
        },
      },
    },
    base: mode === "production" ? '/FE_ASSESSMENT/' : './',
  }
});
