import './globals.css'
import { MedievalSharp, Montserrat } from 'next/font/google'
import { ThemeProvider } from '@/providers/ThemeProvider'
import type { Metadata, Viewport } from 'next'

const medievalSharp = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-medieval',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Dragon Hunter',
  description: 'Jace Drasnia Hendrickson — codex do personagem original.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${medievalSharp.variable} ${montserrat.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
