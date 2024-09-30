/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {
            resolveAlias: {
                canvas: './empty-module.ts', // 将 'canvas' 重定向到 './empty-module.ts'
            },
        },
    },
};

export default nextConfig;
