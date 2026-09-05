import { useState } from 'react'

const ticketUrl = 'https://livepocket.jp/e/zy4df'

const navItems = [
  { label: 'トップ', href: '/' },
  { label: '協賛企業様', href: '/sponsors' },
  { label: '出演バンド', href: '/bands' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  return (
    <nav className="absolute left-0 right-0 top-0 z-50 h-[var(--header-height)] border-b border-white/[0.08] bg-[rgba(6,7,19,0.9)] md:bg-[rgba(6,7,19,0.67)] md:backdrop-blur-[6px]">
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-[var(--header-inline-padding)]">
        <a href="/" className="relative shrink-0 font-['Outfit:Black',sans-serif] text-[length:var(--header-logo-size)] font-black leading-none text-white">
          ANIT <span className="font-['Outfit:Light',sans-serif] font-light text-[#8e93b3]">Summer Live 2026</span>
        </a>
        <div className="hidden items-center gap-[var(--header-nav-gap)] md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href === '/' && path === '/' ? '#top' : item.href} className={`whitespace-nowrap font-['Geist:SemiBold','Noto_Sans_JP:SemiBold',sans-serif] text-[13px] font-semibold transition-colors ${path === item.href ? 'text-white' : 'text-[#8e93b3] hover:text-white'}`}>
              {item.label}
            </a>
          ))}
          <a href={ticketUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full px-4 py-3 font-['Outfit:ExtraBold',sans-serif] text-[11px] font-extrabold leading-none text-white transition-opacity hover:opacity-80">
            TICKET <span className="text-xs">→</span>
          </a>
        </div>
        <button type="button" aria-label="メニューを開く" aria-expanded={open} onClick={() => setOpen(true)} className="flex size-10 items-center justify-center rounded-xl border border-white/[0.08] md:hidden">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden><path d="M3 5h14M3 10h14M3 15h14" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>
      </div>
      {open ? (
        <div className="mobile-menu-overlay fixed inset-0 z-[80] bg-[#060713]/[0.98] px-5 pt-5 md:hidden">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <p className="font-['Outfit:Black',sans-serif] text-[22px] font-black leading-none text-white">ANIT <span className="font-['Outfit:Light',sans-serif] font-light text-[#8e93b3]">Summer Live 2026</span></p>
            <button type="button" aria-label="メニューを閉じる" onClick={() => setOpen(false)} className="flex size-11 items-center justify-center rounded-xl border border-white/[0.08]"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden><path d="m5 5 10 10M15 5 5 15" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg></button>
          </div>
          <div className="mt-5 flex flex-col">
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className={`mobile-menu-item flex min-h-14 items-center border-b border-white/[0.06] py-4 font-['Geist:SemiBold','Noto_Sans_JP:SemiBold',sans-serif] text-[13px] font-semibold ${path === item.href ? 'text-white' : 'text-[#8e93b3]'}`} style={{ animationDelay: `${80 + index * 70}ms` }}>{item.label}</a>
            ))}
            <a href={ticketUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="mobile-menu-item flex min-h-14 items-center gap-2 border-b border-white/[0.06] py-4 font-['Outfit:ExtraBold',sans-serif] text-[11px] font-extrabold text-white" style={{ animationDelay: '290ms' }}>TICKET <span className="text-xs">→</span></a>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
