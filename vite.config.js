import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import {  resolve  } from 'path';
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server:{
        port: 5176,
        proxy: {
            "/api": {
                target: 'http://localhost:8080',
                // 去掉路径中的api
                rewrite: (path) => path.replace(/^\/api/,""),
                // 允许跨域
                changeOrigin: true,
            }
        }
    }
})

