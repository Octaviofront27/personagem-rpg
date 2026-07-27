'use client'

import { useEffect } from 'react'

/**
 * Porta de scroll-progress.ts: preenche a barra .scroll-progress conforme o usuario avanca
 * na leitura da pagina, acompanhando a rolagem do mesmo .rpg-shell.scrollable observado
 * pelo useHeaderBlurProgress.
 */
export function useScrollProgress() {
  useEffect(() => {
    const scrollContainer = document.querySelector<HTMLElement>('.rpg-shell.scrollable')
    const progressBar = document.querySelector<HTMLElement>('.scroll-progress')

    if (!scrollContainer || !progressBar) return

    const updateProgress = () => {
      const scrollable = scrollContainer.scrollHeight - scrollContainer.clientHeight
      const percent = scrollable > 0 ? (scrollContainer.scrollTop / scrollable) * 100 : 0
      progressBar.style.width = `${percent}%`
    }

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          updateProgress()
          ticking = false
        })
      }
    }

    scrollContainer.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateProgress)
    updateProgress()

    return () => {
      scrollContainer.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])
}
