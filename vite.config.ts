import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import mkcert from 'vite-plugin-mkcert';
import path from "path"


// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [
        react(), mkcert(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.svg', 'pwa-512x512.png'], // 添加图标到缓存
            workbox: {
                globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,gif,svg,woff,woff2}'] // 缓存所有常见的静态资源
            },
            manifest: {
                name: '1斤多少钱',
                short_name: '1斤多少钱',
                description: '1斤多少钱',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    }
                ],
            },
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        https: {}, // 开启 HTTPS
        host: true,
        port: 3000,    // 将端口号修改为旧项目的端口号
    },
    preview: {
        port: 6010, // 设置你的端口号
        host:true // 允许外部访问
    },
})