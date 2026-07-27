import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { FactCard } from '@/components/content/FactCard'

export default function LandingPage() {
  return (
    <>
      <Header title="Jace Drasnia Hendrickson" homeLink={false} />
      <ThemeToggle />

      <main className="rpg-shell">
        <div className="landing">
          <div className="landing-image">
            <Image src="/img/hero-index.jpg" alt="Jace Drasnia Hendrickson" fill priority sizes="50vw" />
          </div>
          <div className="landing-content">
            <p className="hero-epithet">O Dragão Ancião</p>
            <h1 className="hero-name">Jace Drasnia Hendrickson</h1>
            <p className="bio-text">
              Jace é um dragão ancestral de força praticamente ilimitada, capaz de assumir uma forma humana,
              que passou de uma figura fria e solitária para um líder protetor e extremamente poderoso.
              Apesar de sua natureza monstruosa e de seu potencial destrutivo, ele encontrou propósito na
              família, no treinamento e na responsabilidade de proteger aqueles que ama.
            </p>

            <div className="quick-facts">
              <FactCard label="Raça" value="Dragão de ouro enegrecido, Dragão de Ametista e Zatos Depravado" />
              <FactCard label="Patente" value="Diamante de duas estrelas" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
