'use client'

import { Header } from '@/components/layout/Header'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { PageHero } from '@/components/content/PageHero'
import { ScrollProgressBar } from '@/components/content/ScrollProgressBar'
import { ItemPackageCard } from '@/components/content/ItemPackageCard'
import { biologico } from '@/data/biologico'
import { useHeaderBlurProgress } from '@/hooks/useHeaderBlurProgress'
import { useHeroScrollFix } from '@/hooks/useHeroScrollFix'
import { useScrollbarGutter } from '@/hooks/useScrollbarGutter'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function BiologicoPage() {
  useHeaderBlurProgress()
  useHeroScrollFix()
  useScrollbarGutter()
  useScrollProgress()
  useScrollReveal()

  return (
    <>
      <ScrollProgressBar />
      <Header title="Biológico" />
      <ThemeToggle />

      <main className="rpg-shell scrollable">
        <PageHero src="/img/hero-biologico.jpg" alt="Biológico de Jace" />

        <div className="page-content">
          <div className="items-page">
            {biologico.map((pkg) => (
              <ItemPackageCard key={pkg.title} {...pkg} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
