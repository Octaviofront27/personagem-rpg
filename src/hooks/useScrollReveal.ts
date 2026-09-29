'use client'

import { useEffect } from 'react'

/**
 * Porta de scroll-reveal.ts: cards de conteudo (.item-package) surgem com um fade-in sutil
 * conforme entram na tela ao rolar, via IntersectionObserver. O root precisa ser o
 * .rpg-shell.scrollable, ja que o documento em si nao rola (body tem overflow:hidden).
 * Com prefers-reduced-motion o CSS reduz a entrada a um esmaecer, sem deslocamento.
 */
export function useScrollReveal() {
  useEffect(() => {
    const scrollContainer = document.querySelector<HTMLElement>('.rpg-shell.scrollable')

    if (!scrollContainer || !('IntersectionObserver' in window)) return

    // Cards que ja estao na tela quando a pagina abre ficam como estao: esconde-los agora faria
    // o card piscar (aparece no primeiro quadro, some, e so entao entra)
    const viewportBottom = scrollContainer.getBoundingClientRect().bottom
    const targets = [...document.querySelectorAll<HTMLElement>('.item-package')].filter(
      (el) => el.getBoundingClientRect().top >= viewportBottom
    )

    if (!targets.length) return

    // Terminada a entrada, tira as classes de reveal: a transition delas sobrescreve a do
    // .item-package, e o hover do card ficaria sem a transicao de sombra/borda
    const onRevealEnd = (event: TransitionEvent) => {
      // transitionend borbulha: ignora as transicoes dos filhos (ex: fundo dos .sub-item)
      if (event.target !== event.currentTarget || event.propertyName !== 'opacity') return
      const el = event.currentTarget as HTMLElement
      el.classList.remove('reveal-pending', 'reveal-visible')
      el.removeEventListener('transitionend', onRevealEnd)
    }

    targets.forEach((el) => el.classList.add('reveal-pending'))

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.addEventListener('transitionend', onRevealEnd as EventListener)
            entry.target.classList.add('reveal-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      // threshold 0 (e nao uma fracao do card): no celular alguns cards passam de 7 telas de altura,
      // e uma fracao como 0.2 nunca seria atingida — o card ficaria invisivel pra sempre
      { root: scrollContainer, threshold: 0, rootMargin: '0px 0px -60px 0px' }
    )

    targets.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      targets.forEach((el) => el.removeEventListener('transitionend', onRevealEnd))
    }
  }, [])
}
