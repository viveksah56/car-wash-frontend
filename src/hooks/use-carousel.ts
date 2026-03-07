'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { CarouselApi } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

type UseEmblaCarouselOptions = {
    delay?: number
}

type UseCarouselReturn = {
    api: CarouselApi | undefined
    setApi: (api: CarouselApi | undefined) => void
    autoplay: React.MutableRefObject<ReturnType<typeof Autoplay>>
    activeIndex: number
    prev: () => void
    next: () => void
    scrollTo: (index: number) => void
}

export function useCarousel(
    options?: UseEmblaCarouselOptions
): UseCarouselReturn {
    const [api, setApi] = useState<CarouselApi>()
    const [activeIndex, setActiveIndex] = useState(0)

    const autoplay = useRef(
        Autoplay({
            delay: options?.delay ?? 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    )

    const prev = useCallback(() => {
        api?.scrollPrev()
    }, [api])

    const next = useCallback(() => {
        api?.scrollNext()
    }, [api])

    const scrollTo = useCallback(
        (index: number) => {
            api?.scrollTo(index)
        },
        [api]
    )

    useEffect(() => {
        if (!api) return

        const onSelect = () => {
            setActiveIndex(api.selectedScrollSnap())
        }

        onSelect()
        api.on('select', onSelect)
        api.on('reInit', onSelect)

        return () => {
            api.off('select', onSelect)
            api.off('reInit', onSelect)
        }
    }, [api])

    return {
        api,
        setApi,
        autoplay,
        activeIndex,
        prev,
        next,
        scrollTo,
    }
}
