import instagramIcon from '../assets/social/instagram.svg'
import xIcon from '../assets/social/x-white.png'

const instagramUrl = 'https://www.instagram.com/anit_cl?igsh=MXdvbW13anp0amlnaA%3D%3D&utm_source=qr'
const xUrl = 'https://twitter.com/ANIT_LIVE'

function SocialLink({ href, icon, label, iconClassName }: { href: string; icon: string; label: string; iconClassName: string }) {
  return <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex size-[46px] items-center justify-center rounded-full border border-white/[0.13] transition-opacity hover:opacity-70"><img src={icon} alt="" className={`object-contain ${iconClassName}`} /></a>
}

export default function Footer() {
  return (
    <footer className="relative flex w-full flex-col gap-10 border-t border-white/[0.06] bg-[#04050e] px-10 pb-12 pt-20 md:px-20">
      <div className="flex w-full flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex flex-col gap-3">
          <p className="font-['Outfit:Black',sans-serif] text-[20px] font-black leading-none text-white">ANIT SUMMER LIVE 2026</p>
          <p className="font-['Geist:Regular','Noto_Sans_JP:Regular',sans-serif] text-[12px] text-[#8e93b3]">「願いを叶えるのは、魔法だけじゃない。」</p>
        </div>
        <div className="flex items-center gap-3"><SocialLink href={instagramUrl} icon={instagramIcon} label="Instagram" iconClassName="size-[22px]" /><SocialLink href={xUrl} icon={xIcon} label="X（旧Twitter）" iconClassName="size-[20px]" /></div>
      </div>
      <div className="flex w-full flex-col items-start justify-between gap-2 border-t border-white/[0.03] pt-5 md:flex-row md:items-center">
        <p className="font-['Geist:Regular',sans-serif] text-[11px] leading-none text-[#8e93b3]">© 2026 ANIT. All Rights Reserved.</p>
        <p className="font-['Instrument Serif:Italic',serif] text-[13px] italic leading-none text-[#df9f3e]">Theme: Heat up!</p>
      </div>
    </footer>
  )
}
