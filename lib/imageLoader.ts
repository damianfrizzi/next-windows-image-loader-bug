'use client'

import type { ImageLoaderProps } from 'next/image'

export default function myImageLoader({ src, width, quality }: ImageLoaderProps) {
    if (src.startsWith('http') && !src.includes('image.tmdb.org')) {
        const url = new URL(src)
        const query = url.searchParams

        if (width) {
            query.set('width', width.toString())
        }

        query.set('quality', quality?.toString() ?? '75')

        return `${url.origin}${url.pathname}?${query.toString()}`
    }

    if (src.includes('image.tmdb.org')) {
        // This is only here to get rid of Next.js warning about missing width
        return `${src}?w=${width}`
    }

    return src
}
