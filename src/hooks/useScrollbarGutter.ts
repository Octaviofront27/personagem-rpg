'use client'

import { useEffect } from 'react'

/**
 * Mede o espaco que a barra de rolagem de .rpg-shell.scrollable realmente reserva no layout
 * (offsetWidth - clientWidth) e publica como --scrollbar-gutter. No desktop isso da os ~10px
 * do ::-webkit-scrollbar; no mobile a barra e overlay (0px), entao header/.hero deixam de
 * descontar espaco que nao existe e passam a ocupar a largura cheia da tela.
 */
export function useScrollbarGutter() {
  useEffect(() => {
    const scrollContainer = document.querySelector<HTMLElement>('.rpg-shell.scrollable')
    if (!scrollContainer) return

    const updateGutter = () => {
      const gutter = scrollContainer.offsetWidth - scrollContainer.clientWidth
      document.documentElement.style.setProperty('--scrollbar-gutter', `${gutter}px`)
    }

    window.addEventListener('resize', updateGutter)
    updateGutter()

    return () => {
      window.removeEventListener('resize', updateGutter)
      document.documentElement.style.removeProperty('--scrollbar-gutter')
    }
  }, [])
}
