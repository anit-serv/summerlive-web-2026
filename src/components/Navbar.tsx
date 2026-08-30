const ticketUrl = 'https://livepocket.jp/e/zy4df'

const navItems = [
  { label: 'トップ', href: '/' },
  { label: '協賛企業様', href: '/sponsors' },
  { label: '出演バンド', href: '/bands' },
]

export default function Navbar() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  return (
    <nav className="absolute left-0 right-0 top-0 z-50 flex h-[90px] items-center justify-between border-b border-white/[0.08] bg-[rgba(6,7,19,0.67)] px-[80px] backdrop-blur-[6px]">
      <a href="/" className="relative shrink-0 font-['Outfit:Black',sans-serif] text-[22px] font-black leading-none text-white">
        ANIT <span className="font-['Outfit:Light',sans-serif] font-light text-[#8e93b3]">2026</span>
      </a>
      <div className="flex items-center gap-10">
        {navItems.map((item) => (
          <a key={item.href} href={item.href === '/' && path === '/' ? '#top' : item.href} className={`whitespace-nowrap font-['Geist:SemiBold','Noto_Sans_JP:SemiBold',sans-serif] text-[13px] font-semibold transition-colors ${path === item.href ? 'text-white' : 'text-[#8e93b3] hover:text-white'}`}>
            {item.label}
          </a>
        ))}
        <a href={ticketUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full px-4 py-3 font-['Outfit:ExtraBold',sans-serif] text-[11px] font-extrabold leading-none text-white transition-opacity hover:opacity-80">
          TICKET <span className="text-xs">→</span>
        </a>
      </div>
    </nav>
  )
}
