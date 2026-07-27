'use client'

import { useEffect } from 'react'

/**
 * Porta de scroll-reveal.ts: cards de conteudo (.item-package) surgem com um fade-in sutil
 * conforme entram na tela ao rolar, via IntersectionObserver. O root precisa ser o
 * .rpg-shell.scrollable, ja que o documento em si nao rola (body tem overflow:hidden).
 */
export function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.item-package')
    const scrollContainer = document.querySelector<HTMLElement>('.rpg-shell.scrollable')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!targets.length || !scrollContainer || prefersReducedMotion || !('IntersectionObserver' in window)) {
      return
    }

    targets.forEach((el) => el.classList.add('reveal-pending'))

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { root: scrollContainer, threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
