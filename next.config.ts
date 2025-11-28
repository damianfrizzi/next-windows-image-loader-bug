import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        loader: 'custom',
        loaderFile: './lib/imageLoader.ts',
        imageSizes: [],
        deviceSizes: [640, 820, 1200, 2432],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
            },
            {
                protocol: 'https',
                hostname: 'www.theoneswelove.ch',
            },
            {
                protocol: 'https',
                hostname: 'sjnachksoziczhtscjte.supabase.co',
            },
            {
                protocol: 'https',
                hostname: 'xtoghadwmvopttvezlua.supabase.co',
            },
        ],
    },
};

export default nextConfig;
