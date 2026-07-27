'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { href: '/itens', label: 'Itens' },
  { href: '/biologico', label: 'Biológico' },
  { href: '/habilidades', label: 'Habilidades' },
  { href: '/invocacoes', label: 'Invocações' },
  { href: '/pets', label: 'Pets' },
]

interface HeaderProps {
  title: string
  homeLink?: boolean
}

export function Header({ title, homeLink = true }: HeaderProps) {
  const pathname = usePathname()
  const logoIcon = (
    <Image src="/img/icons8-dragão-50.png" alt="Dragon Head Logo" className="logo-img" width={40} height={40} priority />
  )

  return (
    <header>
      <div className="logo">
        {homeLink ? <Link href="/">{logoIcon}</Link> : logoIcon}
        <span>{title}</span>
      </div>
      <nav>
        <ul>
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={cn(pathname === href && 'active-nav')}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
