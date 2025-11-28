'use client'

import type { ImageLoaderProps } from 'next/image'

export default function myImageLoader({ src, width, quality }: ImageLoaderProps) {
    const url = new URL(src)
    const query = url.searchParams

    if (width) {
        query.set('width', width.toString())
    }

    query.set('quality', quality?.toString() ?? '75')

    return `${url.origin}${url.pathname}?${query.toString()}`
}
