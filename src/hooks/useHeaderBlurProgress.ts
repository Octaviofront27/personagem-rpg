'use client'

import { useEffect } from 'react'

/**
 * Porta de header-blur.ts: o cabecalho comeca transparente sobre a hero fixa e ganha o
 * fundo escuro/embacado aos poucos conforme o usuario rola, ficando 100% embacado quando
 * o painel de conteudo alcanca o topo da tela. A altura da .hero-image e lida em tempo
 * real, entao a mesma logica funciona nos breakpoints desktop/mobile sem duplicar valores.
 */
export function useHeaderBlurProgress() {
  useEffect(() => {
    const scrollContainer = document.querySelector<HTMLElement>('.rpg-shell.scrollable')
    const heroImage = document.querySelector<HTMLElement>('.hero.page-hero .hero-image')

    if (!scrollContainer || !heroImage) return

    let thresholdPx = heroImage.getBoundingClientRect().height

    const updateThreshold = () => {
      thresholdPx = heroImage.getBoundingClientRect().height
    }

    const updateBlur = () => {
      const progress = thresholdPx > 0 ? Math.min(1, scrollContainer.scrollTop / thresholdPx) : 1
      document.documentElement.style.setProperty('--header-blur-progress', progress.toString())
    }

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          updateBlur()
          ticking = false
        })
      }
    }

    const onResize = () => {
      updateThreshold()
      updateBlur()
    }

    scrollContainer.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    updateBlur()

    return () => {
      scrollContainer.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      document.documentElement.style.removeProperty('--header-blur-progress')
    }
  }, [])
}
