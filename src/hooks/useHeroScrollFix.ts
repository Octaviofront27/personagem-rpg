'use client'

import { useEffect } from 'react'

/**
 * Porta de hero-scroll-fix.ts: navegadores nao repassam a rolagem do mouse para o container
 * quando o cursor esta sobre um elemento "position: fixed" (a hero). Repassamos manualmente
 * a rolagem pro container correto sempre que o usuario rolar com o mouse em cima da hero fixa.
 */
export function useHeroScrollFix() {
  useEffect(() => {
    const scrollContainer = document.querySelector<HTMLElement>('.rpg-shell.scrollable')
    const heroElements = document.querySelectorAll<HTMLElement>('.hero')

    if (!scrollContainer || heroElements.length === 0) return

    const onWheel = (event: WheelEvent) => {
      scrollContainer.scrollTop += event.deltaY
      event.preventDefault()
    }

    heroElements.forEach((hero) => hero.addEventListener('wheel', onWheel, { passive: false }))

    return () => {
      heroElements.forEach((hero) => hero.removeEventListener('wheel', onWheel))
    }
  }, [])
}
