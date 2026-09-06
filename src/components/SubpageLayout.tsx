import type { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import PageHero from './PageHero'
import TicketCtaSection from './TicketCtaSection'

type SubpageLayoutProps = {
  title: string
  subtitle: string
  theme: 'gold' | 'pink'
  children: ReactNode
}

export default function SubpageLayout({ title, subtitle, theme, children }: SubpageLayoutProps) {
  return (
    <div className="relative flex min-h-full w-full flex-col items-start bg-[#060713]">
      <Navbar />
      <main className="w-full">
        <PageHero title={title} subtitle={subtitle} theme={theme} />
        {children}
      </main>
      <TicketCtaSection />
      <Footer />
    </div>
  )
}
