import Image from 'next/image'

interface PageHeroProps {
  src: string
  alt: string
}

/**
 * Banner fixo no topo das paginas de conteudo (Habilidades, Itens, etc.): fica preso na tela
 * (position:fixed via .hero.page-hero em globals.css) enquanto o .page-content desliza por
 * cima ao rolar.
 */
export function PageHero({ src, alt }: PageHeroProps) {
  return (
    <section className="hero page-hero">
      <div className="hero-image">
        <Image src={src} alt={alt} fill priority sizes="100vw" />
      </div>
    </section>
  )
}
