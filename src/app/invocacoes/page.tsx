'use client'

import { Header } from '@/components/layout/Header'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { PageHero } from '@/components/content/PageHero'
import { ScrollProgressBar } from '@/components/content/ScrollProgressBar'
import { ItemPackageCard } from '@/components/content/ItemPackageCard'
import { invocacoes } from '@/data/invocacoes'
import { useHeaderBlurProgress } from '@/hooks/useHeaderBlurProgress'
import { useHeroScrollFix } from '@/hooks/useHeroScrollFix'
import { useScrollbarGutter } from '@/hooks/useScrollbarGutter'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function InvocacoesPage() {
  useHeaderBlurProgress()
  useHeroScrollFix()
  useScrollbarGutter()
  useScrollProgress()
  useScrollReveal()

  return (
    <>
      <ScrollProgressBar />
      <Header title="Invocações" />
      <ThemeToggle />

      <main className="rpg-shell scrollable">
        <PageHero src="/img/hero-invocacoes.png" alt="Invocações de Jace" />

        <div className="page-content">
          <div className="items-page">
            {invocacoes.map((pkg) => (
              <ItemPackageCard key={pkg.title} {...pkg} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
